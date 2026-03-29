#!/bin/bash
# Security Monitoring Script for m0x2.de
# This script performs daily security checks and sends alerts

# Configuration
DOMAIN="m0x2.de"
EMAIL="admin@m0x2.de"  # Update this with your email
LOG_FILE="/var/log/security-monitor.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# Function to log messages
log_message() {
    echo "[$DATE] $1" >> "$LOG_FILE"
}

# Function to send alert (you can customize this)
send_alert() {
    local subject="Security Alert for $DOMAIN"
    local message="$1"
    
    # Send email (requires mail command to be configured)
    if command -v mail &> /dev/null; then
        echo "$message" | mail -s "$subject" "$EMAIL"
    fi
    
    # Log the alert
    log_message "ALERT: $message"
}

# Start monitoring
log_message "Starting security monitoring for $DOMAIN"

# 1. Check SSL certificate expiration
echo "Checking SSL certificate..."
if command -v openssl &> /dev/null; then
    SSL_CHECK=$(openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" 2>/dev/null | openssl x509 -checkend 2592000 -noout)
    if [ $? -ne 0 ]; then
        send_alert "SSL certificate for $DOMAIN expires within 30 days!"
    else
        log_message "SSL certificate is valid for more than 30 days"
    fi
else
    log_message "WARNING: openssl not found, skipping SSL check"
fi

# 2. Check security headers
echo "Checking security headers..."
if command -v curl &> /dev/null; then
    HEADERS=$(curl -s -I "https://$DOMAIN" 2>/dev/null)
    
    # Check for required headers
    REQUIRED_HEADERS=("X-Frame-Options" "Content-Security-Policy" "X-XSS-Protection" "X-Content-Type-Options" "Referrer-Policy")
    
    for header in "${REQUIRED_HEADERS[@]}"; do
        if echo "$HEADERS" | grep -q "$header"; then
            log_message "✓ $header header is present"
        else
            send_alert "Missing security header: $header"
        fi
    done
else
    log_message "WARNING: curl not found, skipping header check"
fi

# 3. Check for open ports
echo "Checking open ports..."
if command -v nmap &> /dev/null; then
    PORT_SCAN=$(nmap -sS "$DOMAIN" 2>/dev/null)
    
    # Check for potentially insecure ports
    if echo "$PORT_SCAN" | grep -q "21/tcp.*open"; then
        send_alert "Port 21 (FTP) is open - consider closing it"
    fi
    
    if echo "$PORT_SCAN" | grep -q "25/tcp.*open"; then
        send_alert "Port 25 (SMTP) is open - consider closing it"
    fi
    
    log_message "Port scan completed"
else
    log_message "WARNING: nmap not found, skipping port scan"
fi

# 4. Check DNSSEC
echo "Checking DNSSEC..."
if command -v dig &> /dev/null; then
    DNSSEC_CHECK=$(dig +dnssec "$DOMAIN" DNSKEY 2>/dev/null)
    if echo "$DNSSEC_CHECK" | grep -q "RRSIG"; then
        log_message "✓ DNSSEC appears to be configured"
    else
        send_alert "DNSSEC may not be properly configured for $DOMAIN"
    fi
else
    log_message "WARNING: dig not found, skipping DNSSEC check"
fi

# 5. Check DMARC policy
echo "Checking DMARC policy..."
if command -v dig &> /dev/null; then
    DMARC_CHECK=$(dig "_dmarc.$DOMAIN" TXT 2>/dev/null)
    if echo "$DMARC_CHECK" | grep -q "p=reject"; then
        log_message "✓ DMARC policy is set to reject"
    elif echo "$DMARC_CHECK" | grep -q "p=quarantine"; then
        send_alert "DMARC policy is set to quarantine - consider upgrading to reject"
    else
        send_alert "DMARC policy not found or misconfigured"
    fi
else
    log_message "WARNING: dig not found, skipping DMARC check"
fi

# 6. Check website availability
echo "Checking website availability..."
if command -v curl &> /dev/null; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN")
    if [ "$HTTP_CODE" = "200" ]; then
        log_message "✓ Website is accessible (HTTP $HTTP_CODE)"
    else
        send_alert "Website returned HTTP code $HTTP_CODE"
    fi
else
    log_message "WARNING: curl not found, skipping availability check"
fi

# 7. Check for common vulnerabilities (basic check)
echo "Checking for common vulnerabilities..."
if command -v curl &> /dev/null; then
    # Check for directory listing
    DIR_LIST_CHECK=$(curl -s "https://$DOMAIN/" | grep -i "index of")
    if [ -n "$DIR_LIST_CHECK" ]; then
        send_alert "Directory listing may be enabled"
    fi
    
    # Check for server information disclosure
    SERVER_INFO=$(curl -s -I "https://$DOMAIN" | grep -i "server:")
    if [ -n "$SERVER_INFO" ]; then
        log_message "Server header present: $SERVER_INFO"
    fi
fi

log_message "Security monitoring completed for $DOMAIN"
echo "Security monitoring completed. Check $LOG_FILE for details."

# Exit with success
exit 0
