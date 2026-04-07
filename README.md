# 🚢 SilverTide Tanzania Limited

A premium, modern website for **SilverTide Tanzania Limited** — a full-service logistics, clearing, and freight forwarding company headquartered in Dar es Salaam, Tanzania.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Hamburger Menu** — Sleek full-screen mobile navigation with smooth transitions
- **Scroll Reveal Animations** — Bidirectional animations that trigger on both scroll down and scroll up
- **Glassmorphism UI** — Modern card designs with backdrop blur and subtle transparency
- **Floating Background** — Animated drifting ships and containers for visual depth
- **Scroll Progress Bar** — Gold-accented progress indicator at the top of the page
- **Back to Top Button** — Smooth scroll-to-top with fade-in/out animation
- **Contact Form** — Validated form with loading state and success feedback
- **Professional Icons** — React Icons throughout (no emoji dependencies)

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport landing with company stats, CTAs, and decorative rotating circles |
| **About** | Company overview, mission, vision, and "Why Choose Us" highlights |
| **Services** | Six service cards — Import, Export, Clearing & Forwarding, Logistics, Warehousing, Air Freight |
| **Testimonials** | Client reviews with star ratings and quote styling |
| **Contact** | Contact info cards (Phone, Email, Location, Instagram) + validated message form |
| **Footer** | Quick links, service list, contact details, and copyright bar |

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vite.dev) | Build tool & dev server |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library (Font Awesome set) |
| [Google Fonts](https://fonts.google.com) | Typography (Playfair Display + Outfit) |
| Vanilla CSS | Styling with CSS variables and keyframe animations |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/silvertide.git
cd silvertide

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173/` (or the next available port).

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
silvertide/
├── public/
│   └── logo.png              # Company logo (used as favicon + branding)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed navbar with hamburger menu
│   │   ├── Hero.jsx           # Hero section with stats & CTAs
│   │   ├── About.jsx          # Company overview, mission & vision
│   │   ├── Services.jsx       # Service cards grid
│   │   ├── Testimonials.jsx   # Client testimonials carousel
│   │   ├── Contact.jsx        # Contact info + form with validation
│   │   ├── Footer.jsx         # Footer with links & contact info
│   │   ├── FloatingBackground.jsx  # Animated background layer
│   │   ├── ScrollProgress.jsx # Top scroll progress bar
│   │   ├── BackToTop.jsx      # Scroll-to-top button
│   │   └── useScrollReveal.js # Bidirectional scroll animation hook
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles, variables & animations
│   ├── index.css              # Base reset styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML template with fonts & meta tags
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies & scripts
└── README.md
```

## 🎨 Design System

### Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--navy` | `#050f1e` | Primary background |
| `--navy-mid` | `#0a1f3a` | Mid-tone backgrounds |
| `--navy-light` | `#0d2d52` | Card accents |
| `--gold` | `#c9a84c` | Primary accent |
| `--gold-light` | `#e8c97a` | Light accent / hover |
| `--silver` | `#b8c4d4` | Body text |
| `--silver-light` | `#dce4ef` | Heading text |
| `--white` | `#f0f4fa` | Primary text |
| `--text-muted` | `#7a93b0` | Muted/secondary text |

### Typography

- **Headings:** Playfair Display (serif) — 400, 600, 700, 900
- **Body:** Outfit (sans-serif) — 300, 400, 500, 600

### Animations

- `fadeInUp` / `fadeInLeft` / `fadeInRight` — Entry animations
- `float` / `floatReverse` — Gentle bobbing motion for icons
- `drift` / `drift2` — Horizontal movement for background elements
- `pulse-ring` — Logo pulsing effect
- `rotateSlow` — Slow rotation for decorative circles
- `wave` — Horizontal wave motion
- `blink` — Blinking indicator dot

## 📞 Contact

- **Phone/WhatsApp:** +255 782 944 117
- **Email:** info@silvertide.co.tz
- **Instagram:** [@silvertide_tz](https://instagram.com/silvertide_tz)
- **Location:** Dar es Salaam, Tanzania

---

© 2026 SilverTide Tanzania Limited. All rights reserved.
