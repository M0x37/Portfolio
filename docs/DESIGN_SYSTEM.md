# One Piece Pirate Portfolio Design System

A cohesive, pirate-themed design system inspired by One Piece, featuring terminal aesthetics, warm vintage colors, and nautical elements.

---

## 🎨 Color Palette

### Primary Colors (Parchment & Leather)
| Token | Hex | Usage |
|-------|-----|-------|
| `--parchment-light` | `#f4e8d0` | Main backgrounds, cards |
| `--parchment-medium` | `#e8dcc0` | Secondary backgrounds, profile picture bg |
| `--parchment-dark` | `#dccfb0` | Gradients, borders |
| `--leather-brown` | `#8b4513` | Primary borders, headers, accents |
| `--leather-dark` | `#654321` | Darker borders, header bottoms |
| `--coffee` | `#2c1810` | Terminal backgrounds, dark text |
| `--coffee-light` | `#5d4037` | Readable dark text on light backgrounds |

### Terminal Traffic Lights
| Token | Hex | Usage |
|-------|-----|-------|
| `--terminal-red` | `#e94560` | Close button |
| `--terminal-yellow` | `#ffd700` | Minimize button |
| `--terminal-green` | `#27c93f` | Maximize button |

### Skill Accent Colors
| Skill | Hex | Icon Color |
|-------|-----|------------|
| React | `#61dafb` | Cyan/Blue |
| Python | `#ffd43b` | Yellow |
| HTML/CSS/JS | `#e34c26` | Orange/Red |
| Git | `#f05032` | Red/Orange |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#2c1810` | Headlines on light backgrounds |
| `--text-terminal` | `#f4e8d0` | Text on dark terminal backgrounds |
| `--text-muted` | `#8b949e` | Terminal prompts, muted text |

---

## 🔤 Typography

### Font Families
```css
--font-terminal: "Courier New", monospace;
--font-serif: "Georgia", "Times New Roman", serif;
```

### Type Scale
| Element | Font | Size | Weight | Transform |
|---------|------|------|--------|-----------|
| Section Title | Terminal | 3rem | bold | uppercase |
| Terminal Header | Terminal | 12px | normal | none |
| Terminal Command | Terminal | 1.2rem | bold | lowercase |
| Skill Name | Terminal | 1.1rem | bold | none |
| Quote Japanese | Terminal | 1.3rem | italic | none |
| Quote English | Terminal | 0.9rem | normal | none |

---

## 📦 Component Patterns

### 1. Main Card Container
**Usage:** Section wrappers, content containers

```jsx
<div style={{
  backgroundColor: '#f4e8d0',
  backgroundImage: `
    linear-gradient(135deg, #f4e8d0 0%, #e8dcc0 50%, #dccfb0 100%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(139, 69, 19, 0.03) 10px,
      rgba(139, 69, 19, 0.03) 20px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(139, 69, 19, 0.03) 10px,
      rgba(139, 69, 19, 0.03) 20px
    )
  `,
  border: '5px solid #8b4513',
  borderRadius: '8px', // or '20px' for larger sections
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)',
  padding: '1rem',
  overflow: 'hidden'
}}>
```

### 2. Terminal Window
**Usage:** Skills display, code snippets, terminal aesthetics

```jsx
<div style={{
  backgroundColor: '#2c1810',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '2px solid #8b4513',
  borderBottom: '4px solid #8b4513',
  fontFamily: '"Courier New", monospace',
  fontSize: '14px',
  textAlign: 'left'
}}>
  {/* Terminal Header */}
  <div style={{
    backgroundColor: '#8b4513',
    padding: '0.75rem 1rem',
    borderBottom: '2px solid #654321',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    {/* Traffic Lights */}
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#e94560'
      }} />
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#ffd700'
      }} />
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#27c93f'
      }} />
    </div>
    {/* Terminal Title */}
    <div style={{
      color: '#f4e8d0',
      fontSize: '12px'
    }}>
      username@portfolio:~$
    </div>
  </div>
  
  {/* Terminal Content */}
  <div style={{
    padding: '2rem',
    color: '#f4e8d0',
    borderBottom: '4px solid #8b4513',
    borderRadius: '0 0 8px 8px'
  }}>
    {/* Your content here */}
  </div>
</div>
```

### 3. Skill Card Grid
**Usage:** Skills display, tech stack showcase

```jsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
  gap: '1.5rem',
  marginBottom: '1rem'
}}>
  {skills.map((skill, index) => (
    <div key={index} style={{
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: `2px solid ${skill.color}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease'
    }}>
      <FontAwesomeIcon 
        icon={skill.icon} 
        style={{ 
          fontSize: '2.5rem', 
          color: skill.color 
        }} 
      />
      <span style={{
        color: '#f4e8d0',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        fontFamily: '"Courier New", monospace'
      }}>
        {skill.name}
      </span>
    </div>
  ))}
</div>
```

### 4. Section Header
**Usage:** Page/section titles

```jsx
<div style={{
  textAlign: 'center',
  marginBottom: '3rem'
}}>
  <h2 style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
    color: '#2c1810',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
    fontFamily: '"Courier New", monospace'
  }}>
    Section Title
  </h2>
  <div style={{
    width: '100px',
    height: '3px',
    backgroundColor: '#8b4513',
    margin: '0 auto',
    borderRadius: '2px'
  }} />
</div>
```

### 5. Quote Display (Bilingual)
**Usage:** Inspirational quotes, testimonials

```jsx
<div style={{
  fontSize: '1.3rem',
  fontStyle: 'italic',
  color: '#f4e8d0',
  fontFamily: '"Courier New", monospace',
  minHeight: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem'
}}>
  <div>&ldquo;{quote.japanese}&rdquo;</div>
  <div style={{
    fontSize: '0.9rem',
    opacity: '0.7',
    fontStyle: 'normal'
  }}>
    {quote.english}
  </div>
</div>
```

### 6. Project Card
**Usage:** Portfolio projects, case studies

```jsx
<div style={{
  backgroundColor: 'rgba(244, 232, 208, 0.9)',
  borderRadius: '16px',
  padding: '2.5rem',
  border: '3px solid #8b4513',
  boxShadow: '0 8px 20px rgba(139, 69, 19, 0.3)',
  transition: 'all 0.3s ease',
  textAlign: 'center'
}}>
  {/* Header - alternates left/right */}
  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
  }}>
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: '0',
      color: '#2c1810',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: '"Courier New", monospace'
    }}>
      {project.title}
    </h3>
  </div>
  
  {/* Description */}
  <p style={{
    color: '#5d4037',
    lineHeight: '1.6',
    fontSize: '1rem',
    marginBottom: '1.5rem'
  }}>
    {project.description}
  </p>
  
  {/* Tech Labels */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    justifyContent: 'center'
  }}>
    {project.tech.map((t, i) => (
      <span key={i} style={{
        backgroundColor: '#8b4513',
        color: '#f4e8d0',
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        fontSize: '0.85rem',
        fontFamily: '"Courier New", monospace'
      }}>
        {t}
      </span>
    ))}
  </div>
</div>
```

---

## 🎯 Layout Guidelines

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight gaps, icon margins |
| `--space-sm` | `0.75rem` | Terminal header padding |
| `--space-md` | `1rem` | Standard gaps, grid gaps |
| `--space-lg` | `1.5rem` | Card padding, skill gaps |
| `--space-xl` | `2rem` | Section content padding |
| `--space-2xl` | `3rem` | Section header margins |

### Container Widths
| Container | Max Width | Usage |
|-----------|-----------|-------|
| Main content | `800px` | Skills, About sections |
| Projects grid | `1200px` | Full-width project listings |
| Header bar | `800px` | Centered page headers |

### Border Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Buttons, tech labels |
| `--radius-md` | `8px` | Terminal windows, cards |
| `--radius-lg` | `12px` | Skill cards |
| `--radius-xl` | `16px` | Project cards |
| `--radius-2xl` | `20px` | Large quote sections |

---

## ✨ Effects & Animations

### Terminal Blink Cursor
```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Usage */
<span style={{ animation: 'blink 1s infinite' }}>█</span>
```

### Card Hover (Projects)
```jsx
onMouseOver={(e) => {
  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
  e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 69, 19, 0.6)';
  e.currentTarget.style.backgroundColor = '#f4e8d0';
  e.currentTarget.style.borderColor = '#654321';
}}
onMouseOut={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.3)';
  e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.9)';
  e.currentTarget.style.borderColor = '#8b4513';
}}
```

### Shadow Patterns
| Effect | Value |
|--------|-------|
| Card shadow | `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)` |
| Project shadow | `0 8px 20px rgba(139, 69, 19, 0.3)` |
| Project hover shadow | `0 12px 32px rgba(139, 69, 19, 0.6)` |
| Profile picture shadow | `0 4px 16px rgba(0, 0, 0, 0.3)` |

---

## 📱 Responsive Behavior

### Breakpoints
| Breakpoint | Behavior |
|------------|----------|
| Desktop (>1024px) | 2-column skill grid, side-by-side layouts |
| Tablet (768-1024px) | 2-column skill grid maintained |
| Mobile (<768px) | Single column, stacked layouts |

### Mobile Adaptations
- Terminal windows: full width, reduced padding
- Skill cards: maintain 2-column grid if possible, else single column
- Section padding: reduce from `2rem` to `1rem`
- Font sizes: reduce headers by 20%

---

## 🚀 Quick Start Template

```jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OnePieceSection: React.FC = () => {
  return (
    <section style={{
      minHeight: '60vh',
      backgroundColor: '#f4e8d0',
      backgroundImage: `/* parchment pattern */`,
      padding: '0rem 2rem 6rem 2rem',
      fontFamily: '"Georgia", "Times New Roman", serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#2c1810',
            textTransform: 'uppercase',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
            fontFamily: '"Courier New", monospace'
          }}>
            Section Title
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            backgroundColor: '#8b4513',
            margin: '0 auto'
          }} />
        </div>
        
        {/* Your Content Here */}
        
      </div>
    </section>
  );
};
```

---

## 🎭 Thematic Elements

### One Piece References
- **Parchment backgrounds** = Old treasure maps
- **Terminal aesthetics** = Ship navigation systems
- **Brown leather borders** = Pirate ship leather/canvas
- **Luffy quotes** = Pirate king ambition
- **Traffic lights** = Ship signal lanterns

### Iconography
- Use `faAnchor` for section headers
- Use `faSkull` for placeholders/fallbacks
- Use `faTerminal` for command-line aesthetics
- Use brand icons for tech stack (React, Python, etc.)

---

## 📦 Dependencies

```bash
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons
```

---

*Design System Version 1.0*
*Inspired by One Piece - Pirate King Portfolio Theme*
