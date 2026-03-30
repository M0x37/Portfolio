# Web Project Design Guidelines

## 🎨 Color Theory Basics

### Warm Palette (Vintage/Retro)
| Role | Light | Medium | Dark |
|------|-------|--------|------|
| Background | `#f4e8d0` | `#e8dcc0` | `#dccfb0` |
| Accent | `#cd853f` | `#8b4513` | `#654321` |
| Text | `#2c1810` | `#4a3728` | `#f4e8d0` |

### Cool Palette (Modern/Tech)
| Role | Light | Medium | Dark |
|------|-------|--------|------|
| Background | `#f8fafc` | `#e2e8f0` | `#1e293b` |
| Accent | `#60a5fa` | `#3b82f6` | `#1d4ed8` |
| Text | `#0f172a` | `#475569` | `#f8fafc` |

### Dark Mode
| Role | Value |
|------|-------|
| Background | `#0a0a0a` / `#121212` |
| Surface | `#1e1e1e` / `#262626` |
| Accent | Pick from brand color |
| Text | `#e5e5e5` / `#a3a3a3` |

## 🔤 Typography Rules

### Font Pairings
| Style | Heading | Body |
|-------|---------|------|
| **Retro** | `Courier New`, monospace | `Georgia`, serif |
| **Modern** | `Inter`, sans-serif | `Inter`, sans-serif |
| **Elegant** | `Playfair Display`, serif | `Source Sans Pro`, sans-serif |
| **Tech** | `JetBrains Mono`, monospace | `system-ui`, sans-serif |

### Hierarchy
| Level | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 3rem | 700 | 1.2 |
| H2 | 2rem | 600 | 1.3 |
| H3 | 1.5rem | 600 | 1.4 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |

## 📐 Spacing System

### Base Unit: 0.25rem (4px)
```
xs:  0.25rem  (4px)
sm:  0.5rem   (8px)
md:  1rem     (16px)
lg:  1.5rem   (24px)
xl:  2rem     (32px)
2xl: 3rem     (48px)
```

### Section Padding
- Mobile: `1rem`
- Tablet: `2rem`
- Desktop: `3rem - 6rem`

## 🎯 Common Components

### Buttons
```
Primary:
- Background: accent color
- Text: white or dark (contrast)
- Padding: 0.75rem 1.5rem
- Border-radius: 0.5rem
- Hover: darken 10%, translateY(-2px)

Secondary:
- Background: transparent
- Border: 2px solid accent
- Text: accent color
- Hover: fill background
```

### Cards
```
Background: surface color
Border-radius: 0.5rem - 1rem
Padding: 1.5rem
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover: 0 8px 24px rgba(0,0,0,0.15)
```

### Terminal Aesthetic (Retro)
```
Background: #2c1810
Header bar: #8b4513
Window controls: #e94560, #ffd700, #27c93f
Text: #f4e8d0
Font: 'Courier New', monospace
Border: 2px solid #8b4513
```

## ✨ Effects & Animations

### Standard Transitions
```css
default: 0.3s ease
fast: 0.15s ease
slow: 0.5s ease
```

### Hover States
- Buttons: `translateY(-2px)` + shadow increase
- Cards: `scale(1.02)` or shadow lift
- Links: underline or color shift

### Common Animations
- **Fade in**: opacity 0 → 1
- **Slide up**: translateY(20px) → translateY(0)
- **Pulse**: scale(1) → scale(1.05) → scale(1)
- **Blink**: opacity toggle (for cursors)

## 📱 Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## 🛡️ Accessibility

### Contrast Ratios
- Normal text: minimum 4.5:1
- Large text: minimum 3:1
- Interactive elements: minimum 3:1

### Focus States
```css
outline: 2px solid accent-color;
outline-offset: 2px;
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔧 Quick Setup

### CSS Variables Template
```css
:root {
  /* Colors */
  --bg-primary: #f4e8d0;
  --bg-secondary: #e8dcc0;
  --accent: #8b4513;
  --text-primary: #2c1810;
  --text-secondary: #4a3728;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography */
  --font-heading: 'Courier New', monospace;
  --font-body: 'Georgia', serif;
  
  /* Effects */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
```

## 📝 Naming Conventions

### BEM (Block Element Modifier)
```
.block { }
.block__element { }
.block--modifier { }
```

### Tailwind-style
```
bg-primary, text-accent, p-4, m-2, rounded-lg
```
