# Jeevanantham A (Jeeva) — AI Engineer & Developer Portfolio

A cinematic, editorial dark-mode developer portfolio website inspired by Awwwards-winning luxury digital experiences. Built with **React**, **Tailwind CSS**, and **GSAP** (GreenSock Animation Platform with ScrollTrigger).

---

## ⚡ Design System & Tokens

| Property | Value | Description |
|---|---|---|
| **Main Background** | `#050505` | Rich cinematic dark charcoal |
| **Pure Black** | `#000000` | Deep contrast black |
| **Primary Text** | `#FFFFFF` | High-contrast crisp typography |
| **Secondary Text** | `#9CA3AF` | Muted cool gray |
| **Accent Lime** | `#CCFF00` | Electric lime highlight & interaction color |
| **About Card Background** | `rgba(255,255,255,0.05)` | Frosted glassmorphism |
| **Card Border** | `rgba(255,255,255,0.10)` | Translucent structural outline |
| **Skills Ticker BG** | `#030303` | Minimal ticker container |
| **Desktop Canvas** | `1440px` | Primary reference grid |

---

## 🌟 Section Architecture (In Exact Specification Order)

1. **Floating Navigation Header (`Navbar.jsx`)**
   - Brand logo `JEEVA` with pulsing neon lime status dot.
   - Smooth anchor navigation (`About`, `Services`, `Projects`, `Contact`).
   - Glassmorphic "Let's Talk" CTA button with arrow hover transition.

2. **Hero Section (`Hero.jsx`)**
   - **Letter Scramble Animation**: Starts with `LEESHARK`, progressively scrambling letter-by-letter every 50ms into `PORTFOLIO`.
   - **Massive Metallic Typography**: Centered behind the person, styled with white-to-gray vertical gradient and drop shadow.
   - **Full-Body Portrait Cutout**: Animate upward from `translateY(100vh)` to `translateY(0)` using GSAP `power3.out`.
   - **Z-Index Layering**: Background gradient → Dark overlay → Huge PORTFOLIO typography → Person image → Subtitle / Contact controls.
   - **Editorial Subtitle & Contact CTA**: "Software Developer" with bold/light-italic styling, circular diagonal arrow button (45° hover rotation), and pill glass contact button.
   - **Scroll Lock Lifecycle**: Locks scroll during the intro sequence and unlocks on completion.

3. **About / Introduction Section (`About.jsx`)**
   - **Giant "INTRO" Heading**: Desktop ~11rem, mobile ~18vw with white-to-gray vertical gradient and GSAP viewport entrance.
   - **Two-Column Editorial Layout**:
     - Left: Professional studio 3-piece suit portrait (`portrait-studio.jpg`) with ambient glow and AI Engineer badge.
     - Right: Glassmorphic description card featuring Jeeva's background and skills.
   - **Word-by-Word Scroll Reveal**: Driven by GSAP `ScrollTrigger` with `scrub: true`, words progressively transition from dim `#52525b` (opacity 0.2) to pure white as the user scrolls.
   - **4-Row Technical Skills Marquee**:
     - Row 1 (Frontend): Moves continuously Left → Right
     - Row 2 (Backend): Moves continuously Right → Left
     - Row 3 (AI): Moves continuously Left → Right
     - Row 4 (Tools): Moves continuously Right → Left

4. **Services Section (`Services.jsx`)**
   - **Giant "WHAT WE CAN DO" Heading**: Right-aligned with metallic gradient and GSAP entrance.
   - **Full-Width Interactive Accordion (01 to 06)**:
     - 01 AI Full Stack Development (with technical corner-accented "VIEW PROJECTS" button)
     - 02 Frontend Development
     - 03 Backend & API Development
     - 04 AI & Automation
     - 05 Mobile Development
     - 06 DevOps & Tools
   - **Electric Lime Desktop Hover**: Hovering any service row instantly turns the entire full-width row into a bright electric lime (`#CCFF00`) highlight bar with solid black text and black arrow!
   - **Smooth Expansion**: 500ms transition revealing key capabilities with square bullets and detailed descriptions.

5. **Projects / Selected Work Section (`Projects.jsx`)**
   - **Two-Column Header**: Giant `SELECTED work` title (with lowercase italic serif "work") + editorial summary + lime pill `Read More ↗` CTA.
   - **Alternating Editorial Layout (4 Featured Projects)**:
     - **01: Self-Healing RAG Agent** (Image left / Text right)
     - **02: AI Speech-to-Sign Language Translator** (Text left / Image right)
     - **03: Instagram AI Automation Platform** (Image left / Text right)
     - **04: Jarvis AI Desktop Assistant** (Text left / Image right)
   - **16:10 Aspect Ratio Imagery**: Smooth 700ms hover zoom (scale 1.05) and opacity boost.
   - **Dual Action CTAs**: Electric Lime `Live Demo ↗` button and semi-transparent `GitHub` button.
   - **GSAP ScrollTrigger**: Smooth coordinated slide-up and fade-in entrances.

6. **Contact Section (`Contact.jsx`)**
   - **Atmospheric Background**: Subtle diffused neon-green horizon illumination.
   - **Left Column**: Giant `Get in touch` heading, direct email (`arjunjeeva33@gmail.com`), phone (`+91 74185 73315`), location (`Chennai, Tamil Nadu, India`), and 4 glass circular social buttons with hover glow.
   - **Right Column**: Minimal dark glass form with inputs for Full Name, Email, Phone, Subject, and 5-line Message.
   - **Full-Width White Button**: "Send Message" with loading spinner and green success confirmation banner.

7. **Footer Section (`Footer.jsx`)**
   - **100vh Full-Screen Cinematic Experience**: Powered by the generated luminous neon green horizon background image (`footer-glow.jpg`) and top-down black gradient overlay.
   - **Top 2-Column Content**: Direct email link, navigation links, "Let's build something" CTA.
   - **Social Row**: Evenly distributed links with subtle border divider.
   - **Massive Brand Typography**: Center `JEEVA` typography spanning ~13vw.
   - **Legal Information**: Dynamic copyright year and policy links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: GSAP 3.12 + ScrollTrigger
- **Icons**: Custom SVG + Lucide React
- **Typography**: Inter, Playfair Display (Serif accent), Space Grotesk (Mono)

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
