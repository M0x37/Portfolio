# Portfolio Design System

## 🎨 Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Cream** | `#f4e8d0` | Main background, cards |
| **Sand** | `#e8dcc0` | Gradient mid-tone |
| **Tan** | `#dccfb0` | Gradient dark-tone |
| **Saddle Brown** | `#8b4513` | Borders, accents, headings |

### Terminal Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Dark Terminal** | `#2c1810` | Terminal background |
| **Terminal Red** | `#e94560` | Close button |
| **Terminal Yellow** | `#ffd700` | Minimize button |
| **Terminal Green** | `#27c93f` | Maximize button, arrows |
| **Cream Text** | `#f4e8d0` | Text on dark backgrounds |
| **Dark Brown** | `#2c1810` | Text on light backgrounds |
| **Gold** | `#ffbd2e` | File paths, highlights |
| **White** | `#ffffff` | Skill names |
| **Gray** | `#8b949e` | Prompt symbols |

## 🔤 Typography

| Element | Font | Style |
|---------|------|-------|
| **Headings** | `Courier New`, monospace | Uppercase, bold, letter-spacing: 2px |
| **Body** | `Georgia`, `Times New Roman`, serif | Regular weight |
| **Terminal** | `Courier New`, monospace | 14px, monospace |
| **Quotes** | `Courier New`, monospace | Italic, 1.3rem |

## 📐 Visual Elements

### Background Pattern
```
Linear gradient: 135deg, #f4e8d0 → #e8dcc0 → #dccfb0
+
Diagonal stripes: 45deg, rgba(139, 69, 19, 0.03)
+
Diagonal stripes: -45deg, rgba(139, 69, 19, 0.03)
```

### Borders & Shadows
- **Border**: 3px solid `#8b4513`
- **Border Radius**: 8px
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.3)`
- **Inset Shadow**: `inset 0 0 20px rgba(139, 69, 19, 0.1)`

### Terminal Window
- Background: `#2c1810`
- Header: `#8b4513` with 3 colored dots
- Border: 2px solid `#8b4513`
- Bottom border: 4px (3D effect)

### Section Dividers
- 100px width
- 3px height
- `#8b4513` color
- 2px border-radius

## 🎯 Component Styles

### Terminal Header
```
┌──────────────────────────────┐
│ 🔴 🟡 🟢  user@portfolio:~$ │
├──────────────────────────────┤
│                              │
│  Content here                │
│                              │
└──────────────────────────────┘
```

### Skill List Items
- Arrow: `➜` in green (`#27c93f`)
- Path: `./` in gold (`#ffbd2e`)
- Name: white (`#ffffff`)

### Quote Box
- Captain's Log header in brown
- Italic quote in cream
- No dots/pagination (static random)

## ✨ Effects

- **Cursor Blink**: 1s infinite animation
- **Hover**: translateY(-2px) + scale(1.05)
- **Transitions**: 0.3s ease all
