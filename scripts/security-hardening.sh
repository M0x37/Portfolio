#!/bin/bash
# Server Security Hardening Script for m0x2.de
# This script implements comprehensive security measures

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "This script must be run as root"
    exit 1
fi

print_status "Starting security hardening for m0x2.de..."

# 1. Update system packages
print_status "Updating system packages..."
apt update && apt upgrade -y

# 2. Install security tools
print_status "Installing security tools..."
apt install -y fail2ban ufw certbot python3-certbot-nginx unattended-upgrades auditd rkhunter chkrootkit

# 3. Configure firewall
print_status "Configuring firewall..."
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw deny 21/tcp    # FTP
ufw deny 25/tcp    # SMTP (if not needed)
ufw --force enable

# 4. Secure SSH configuration
print_status "Securing SSH..."
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup

# SSH hardening settings
cat > /etc/ssh/sshd_config.d/security.conf << EOF
# Security hardening
Port 22
Protocol 2
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
ChallengeResponseAuthentication no
UsePAM no
X11Forwarding no
PrintMotd no
ClientAliveInterval 300
ClientAliveCountMax 2
MaxAuthTries 3
MaxSessions 2
Banner /etc/ssh/banner
EOF

# Create SSH banner
echo "AUTHORIZED ACCESS ONLY. All activities are monitored and recorded." > /etc/ssh/banner

# Restart SSH service
systemctl restart ssh

# 5. Configure fail2ban
print_status "Configuring fail2ban..."
cat > /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
backend = systemd

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600

[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 3
bantime = 3600

[nginx-limit-req]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 3
bantime = 3600

[nginx-noscript]
enabled = true
port = http,https
logpath = /var/log/nginx/access.log
maxretry = 6
bantime = 86400

[nginx-badbots]
enabled = true
port = http,https
logpath = /var/log/nginx/access.log
maxretry = 2
bantime = 86400

[recidive]
enabled = true
logpath = /var/log/fail2ban.log
banaction = iptables-allports
bantime = 604800
findtime = 86400
maxretry = 5
EOF

systemctl enable fail2ban
systemctl start fail2ban

# 6. Configure automatic security updates
print_status "Configuring automatic security updates..."
cat > /etc/apt/apt.conf.d/50unattended-upgrades << EOF
Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}-security";
    "\${distro_id}ESM:\${distro_codename}";
};
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-New-Unused-Dependencies "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Mail "root";
EOF

cat > /etc/apt/apt.conf.d/20auto-upgrades << EOF
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
APT::Periodic::Unattended-Upgrade "1";
EOF

systemctl enable unattended-upgrades
systemctl start unattended-upgrades

# 7. System hardening
print_status "Applying system hardening..."

# Disable unused filesystems
cat >> /etc/modprobe.d/disable-filesystems.conf << EOF
install cramfs /bin/true
install freevxfs /bin/true
install jffs2 /bin/true
install hfs /bin/true
install hfsplus /bin/true
install squashfs /bin/true
install udf /bin/true
install vfat /bin/true
EOF

# Network security settings
cat >> /etc/sysctl.conf << EOF

# Network security hardening
net.ipv4.ip_forward = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.default.secure_redirects = 0
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 5
EOF

# Apply sysctl settings
sysctl -p

# 8. File permissions
print_status "Setting secure file permissions..."

# Secure critical files
chmod 600 /etc/ssh/sshd_config
chmod 600 /etc/ssh/ssh_host_*_key
chmod 644 /etc/ssh/ssh_host_*_key.pub
chmod 600 /etc/fail2ban/jail.local

# Set proper ownership
chown root:root /etc/ssh/sshd_config
chown root:root /etc/fail2ban/jail.local

# 9. Configure log rotation
print_status "Configuring log rotation..."
cat > /etc/logrotate.d/security << EOF
/var/log/auth.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    copytruncate
}

/var/log/fail2ban.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    copytruncate
}
EOF

# 10. Setup security monitoring
print_status "Setting up security monitoring..."
cat > /usr/local/bin/security-scan.sh << 'EOF'
#!/bin/bash
# Daily security scan script

LOG_FILE="/var/log/daily-security-scan.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting daily security scan" >> "$LOG_FILE"

# Check for rootkits
if command -v rkhunter &> /dev/null; then
    rkhunter --check --skip-keypress --report-warnings-only >> "$LOG_FILE" 2>&1
fi

# Check for rootkits (alternative)
if command -v chkrootkit &> /dev/null; then
    chkrootkit >> "$LOG_FILE" 2>&1
fi

# Check for suspicious processes
ps aux | grep -E "(bash|sh|python|perl|nc|netcat)" | grep -v grep >> "$LOG_FILE" 2>&1

# Check network connections
netstat -tuln >> "$LOG_FILE" 2>&1

echo "[$DATE] Daily security scan completed" >> "$LOG_FILE"
EOF

chmod +x /usr/local/bin/security-scan.sh

# Add to cron
echo "0 2 * * * /usr/local/bin/security-scan.sh" | crontab -

# 11. SSL Certificate setup
print_status "Setting up SSL certificate..."
if [ -f "/etc/nginx/sites-available/m0x2.de" ]; then
    certbot --nginx -d m0x2.de -d www.m0x2.de --non-interactive --agree-tos --email admin@m0x2.de
    certbot renew --dry-run
else
    print_warning "Nginx configuration not found. Please run certbot manually after setting up nginx."
fi

# 12. Final checks
print_status "Performing final security checks..."

# Check if services are running
services=("ssh" "ufw" "fail2ban" "nginx")
for service in "${services[@]}"; do
    if systemctl is-active --quiet "$service"; then
        print_status "✓ $service is running"
    else
        print_warning "⚠ $service is not running"
    fi
done

# Check firewall status
if ufw status | grep -q "Status: active"; then
    print_status "✓ Firewall is active"
else
    print_error "✗ Firewall is not active"
fi

print_status "Security hardening completed!"
print_warning "Please review the following:"
echo "1. SSH keys have been configured - password authentication is disabled"
echo "2. Firewall rules have been applied - verify they meet your needs"
echo "3. SSL certificate setup may require manual configuration"
echo "4. Review and customize fail2ban rules as needed"
echo "5. Set up proper email alerts for security notifications"
echo "6. Schedule regular security audits"
echo ""
echo "Important: Reboot the system to apply all kernel-level security changes"
echo "Backup important data before rebooting"
