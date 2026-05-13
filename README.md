<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=280&section=header&text=Prakhar%20Verma&fontSize=70&fontColor=ffffff&animation=fadeIn&desc=Elite%20AI%20%7C%20Frontend%20Developer&descAlignY=72&descAlign=50" width="100%" />

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&pause=1000&color=00D4FF&center=true&vCenter=true&width=900&lines=Immersive+3D+Portfolio+Architecture;React+%E2%80%A2+Three.js+%E2%80%A2+GSAP+%E2%80%A2+Tailwind+CSS;Engineered+for+Performance+%26+Aesthetics;Bridging+Machine+Learning+%26+Frontend+Mastery;WebGL+%7C+60fps+%7C+Awwwards-Tier+Experience" alt="Typing SVG" />

<br/>

[![Deploy Status](https://img.shields.io/badge/Deploy-Live-brightgreen?style=for-the-badge&logo=vercel)](https://github.com/prakhar9044-code)
[![License](https://img.shields.io/badge/License-MIT-7C5CFF?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00D4FF?style=for-the-badge)](CONTRIBUTING.md)
[![Stars](https://img.shields.io/github/stars/prakhar9044-code/premium-3d-portfolio?style=for-the-badge&color=FFD700)](https://github.com/prakhar9044-code/premium-3d-portfolio)

<br/>

<p align="center">
  <a href="#-about-the-architecture">Architecture</a> •
  <a href="#-core-features">Features</a> •
  <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-installation--setup">Setup</a> •
  <a href="#-environment-variables">Env Vars</a> •
  <a href="#-performance">Performance</a> •
  <a href="#-component-breakdown">Components</a> •
  <a href="#-animation-system">Animations</a> •
  <a href="#-color-palette--design-tokens">Design Tokens</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#%EF%B8%8F-roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Three.js-r158-050505?style=for-the-badge&logo=threedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.x-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</p>

</div>

---

## 🌌 About the Architecture

This repository contains the source code for a **premium, high-performance personal portfolio** crafted at the intersection of Artificial Intelligence and elite frontend engineering. Built as a **Single Page Application (SPA)**, every layer of this project is deliberate — from the WebGL particle engine to sub-50ms interaction latency.

The philosophy: **no canvas left blank, no millisecond wasted.** Instead of off-the-shelf templates or heavy UI libraries, every visual system is hand-engineered using low-level primitives: raw WebGL via **React Three Fiber**, frame-perfect animations via **GSAP**, and silky-smooth scrolling via **Lenis**. The result is an experience that feels closer to a game engine demo than a traditional portfolio.

```
┌────────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYERS                         │
├──────────────────┬─────────────────────┬───────────────────────┤
│  🎨 UI / React   │  🌐 WebGL / Three.js │  🎬 Animation / GSAP  │
│  Components      │  Particle System     │  ScrollTrigger        │
│  Tailwind CSS    │  Shader Materials    │  Timeline Sequences   │
│  Glassmorphism   │  Instanced Meshes    │  Lenis Integration    │
├──────────────────┴─────────────────────┴───────────────────────┤
│                  📦 Data Layer (JSON/JS)                        │
│      Projects • Skills • Certifications • Experience           │
└────────────────────────────────────────────────────────────────┘
```

> **Status:** `🟢 Online & Ready` &nbsp;|&nbsp; **Performance:** `⚡ 60fps Locked` &nbsp;|&nbsp; **Focus:** `AI & Scalable Architecture`

---

## ✨ Core Features

### 🔵 Immersive 3D Render Core
A fully custom **instanced WebGL particle system** powers the background environment. Using `THREE.InstancedMesh` with a custom `ShaderMaterial`, thousands of particles respond to mouse movement and scroll depth — all while maintaining a **strict 60fps** budget through frustum culling, geometry instancing, and delta-time-based animation loops.

### 🎬 Cinematic Scroll Animations
Every section entrance, text reveal, and UI transition is a **GSAP Timeline** pinned to the scroll delta via `ScrollTrigger`. Animations are composed, not triggered — meaning each element's motion is choreographed relative to its siblings, producing cohesive, film-quality transitions rather than isolated pop-ins.

### 🌊 Fluid Smooth Scrolling
The native browser scroll is completely intercepted and replaced by **`@studio-freight/lenis`**, delivering a friction-based, momentum-driven scroll that feels identical to native iOS inertia scrolling. Lenis feeds its `lerpedScroll` value directly into GSAP's `ScrollTrigger.update()` on every RAF tick, ensuring scroll-linked animations are always in perfect sync.

### 🪟 Premium Glassmorphism UI
The entire UI layer uses a meticulously crafted **AMOLED-first dark design system**. Components use `backdrop-filter: blur()` with semi-transparent borders, creating a layered depth effect against the 3D background. All tokens are defined in Tailwind's `theme.extend` for perfect consistency.

### 📊 Data-Driven Modularity
All portfolio content — Projects, Skills, Certifications, Timeline — lives in a centralized `/src/data/` directory as typed JS/JSON objects. **Zero content is hardcoded into JSX.** To update the portfolio, only the data files need editing; the UI auto-adapts.

### ⚡ Vite-Powered Build Pipeline
Dev server and production builds are handled by **Vite 5**, offering near-instant HMR, tree-shaking, and automatic chunk splitting. Three.js and GSAP are code-split into separate async chunks, keeping the initial JS payload under **80KB**.

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Role |
|:---|:---:|:---|
| [React](https://reactjs.org/) | 18.x | Component architecture & UI layer |
| [Vite](https://vitejs.dev/) | 5.x | Build tool, HMR, bundler |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety across all layers |

### Styling
| Technology | Version | Role |
|:---|:---:|:---|
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Utility-first design system |
| [Lucide React](https://lucide.dev/) | Latest | Icon set |
| Custom CSS | — | Glassmorphism, keyframes, scrollbar |

### 3D & Rendering
| Technology | Version | Role |
|:---|:---:|:---|
| [Three.js](https://threejs.org/) | r158 | Core WebGL rendering |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 8.x | Declarative R3F renderer |
| [@react-three/drei](https://github.com/pmndrs/drei) | 9.x | Helpers: `useGLTF`, `Text`, `Stars` |
| Custom GLSL | — | Vertex & Fragment shaders |

### Animation
| Technology | Version | Role |
|:---|:---:|:---|
| [GSAP](https://greensock.com/) | 3.x | Timeline & scroll animations |
| [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) | 3.x | Scroll-linked animation engine |
| [Lenis](https://lenis.studiofreight.com/) | Latest | Smooth scroll interpolation |

---

## 📁 Project Structure

```
premium-3d-portfolio/
│
├── public/                        # Static assets (favicon, og-image, fonts)
│   ├── favicon.ico
│   ├── og-image.png
│   └── fonts/
│
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Glassmorphism nav with scroll-aware opacity
│   │   │   └── Footer.tsx
│   │   ├── sections/              # Full-page sections (each is a GSAP Timeline target)
│   │   │   ├── Hero.tsx           # Entry screen with typewriter + CTA
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx       # Filterable project grid
│   │   │   ├── Skills.tsx         # Animated skill bars + tech icons
│   │   │   ├── Experience.tsx     # Vertical timeline component
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx        # EmailJS-powered contact form
│   │   └── ui/                    # Atomic UI primitives
│   │       ├── GlassCard.tsx
│   │       ├── NeonButton.tsx
│   │       ├── TagBadge.tsx
│   │       └── SectionTitle.tsx
│   │
│   ├── three/                     # All WebGL / Three.js code
│   │   ├── ParticleField.tsx      # Core instanced particle system
│   │   ├── SceneWrapper.tsx       # R3F Canvas + camera + lights
│   │   ├── shaders/
│   │   │   ├── particle.vert.glsl
│   │   │   └── particle.frag.glsl
│   │   └── hooks/
│   │       └── useMouseParallax.ts
│   │
│   ├── animations/                # GSAP animation factories
│   │   ├── scrollAnimations.ts    # ScrollTrigger timelines per section
│   │   ├── heroAnimation.ts       # Hero entrance sequence
│   │   └── useLenis.ts            # Lenis setup + GSAP integration hook
│   │
│   ├── data/                      # 📦 All portfolio content lives here
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   └── config.ts              # Site metadata, social links
│   │
│   ├── hooks/                     # Shared custom hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useTheme.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── types/                     # TypeScript interfaces & enums
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── globals.css            # Base styles, CSS vars, scrollbar
│   │
│   ├── App.tsx                    # Root: Lenis init, section mounting
│   └── main.tsx                   # Vite entry point
│
├── .env.example                   # Required env variables template
├── tailwind.config.ts             # Custom colors, fonts, animations
├── vite.config.ts                 # Aliases, build config, chunk splitting
├── tsconfig.json
└── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites

Ensure the following are installed on your system:

| Tool | Minimum Version | Check Command |
|:---|:---:|:---|
| Node.js | `v18.0.0+` | `node -v` |
| npm | `v8+` | `npm -v` |
| Git | Latest | `git --version` |

---

### Step 1 — Clone the Repository
```bash
git clone https://github.com/prakhar9044-code/premium-3d-portfolio.git
cd premium-3d-portfolio
```

### Step 2 — Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm (recommended — fastest)
pnpm install
```

### Step 3 — Configure Environment Variables
```bash
cp .env.example .env
```
Open `.env` and fill in your values (see [Environment Variables](#-environment-variables) below).

### Step 4 — Start the Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173). HMR is active — changes reflect instantly without full reloads.

### Step 5 — Build for Production
```bash
npm run build       # Type-check + bundle
npm run preview     # Preview the production build locally
```

---

## 🔐 Environment Variables

Create a `.env` file at the root from the provided template:

```env
# ── EmailJS (Contact Form) ─────────────────────────────────────
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# ── Site Config ────────────────────────────────────────────────
VITE_SITE_URL=https://your-domain.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Google Analytics (optional)
```

> ⚠️ **Never commit `.env` to Git.** It is listed in `.gitignore` by default.

---

## 🧩 Component Breakdown

### `<ParticleField />` — The Heart of the 3D Scene
The most complex component in the project. It creates an `InstancedMesh` of ~5,000 particles using a custom GLSL shader. Each particle's position, scale, and opacity are driven by:
- A base sine/cosine wave keyed to `clock.elapsedTime`
- Mouse position, `lerp`-interpolated for smooth parallax
- Scroll depth passed as a uniform to the fragment shader

```tsx
// Simplified core of ParticleField.tsx
const ParticleField = () => {
  const mesh = useRef<THREE.InstancedMesh>(null);

  useFrame(({ clock, mouse }) => {
    for (let i = 0; i < COUNT; i++) {
      // Update position via dummy Object3D, then push matrix
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[geometry, material, COUNT]}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </instancedMesh>
  );
};
```

### `<GlassCard />` — Reusable Glassmorphism Container
Every content card extends this primitive. It composes `backdrop-filter: blur()`, transparent borders, and a subtle `box-shadow` glow using the neon accent colors — all via Tailwind utility classes mapped to CSS variables.

### `useLenis()` — Smooth Scroll Hook
Initializes Lenis on mount, syncs its RAF loop to `gsap.ticker`, and exposes a `scrollTo(target)` utility consumed by the Navbar for anchor navigation.

---

## 🎬 Animation System

All animations are organized into **named GSAP Timelines**, grouped by section. This keeps them composable, reversible, and debuggable via GSAP DevTools.

```
Animation Pipeline
──────────────────
  [Page Load]
       │
       ▼
  heroEntrance()         ← Logo, headline, CTA staggered in (0.8s total)
       │
       ▼
  [Scroll begins — Lenis feeds ScrollTrigger on every RAF tick]
       │
       ├──▶ aboutReveal()     ← Text clip-path wipe + image parallax
       ├──▶ projectsIn()      ← Cards cascade in from below (stagger: 0.1s)
       ├──▶ skillBars()       ← Width tween 0% → actual% on enter viewport
       ├──▶ timelineReveal()  ← Vertical line draw + node pop-in sequence
       └──▶ contactFadeIn()   ← Opacity + translateY fade
```

### Key GSAP Patterns Used

| Pattern | Purpose |
|:---|:---|
| `gsap.context()` | Scoped animations with auto-cleanup on component unmount |
| `ScrollTrigger.batch()` | Efficient batch entry triggering for card grids |
| `gsap.matchMedia()` | Different animation configs for mobile vs desktop breakpoints |
| `timeline.fromTo()` | Enables bi-directional scrubbing on scroll-back |
| `gsap.set()` | Instant state set before timeline plays (prevents FOUC) |

---

## 🎨 Color Palette & Design Tokens

The entire visual identity is defined in `tailwind.config.ts` and driven by CSS custom properties:

```css
/* src/styles/globals.css */
:root {
  --color-bg:        #050505;   /* True AMOLED black */
  --color-surface:   #0D0D0D;   /* Card & panel backgrounds */
  --color-border:    #1A1A2E;   /* Subtle element borders */
  --color-primary:   #7C5CFF;   /* Neon violet — primary accent */
  --color-secondary: #00D4FF;   /* Electric cyan — secondary accent */
  --color-text:      #E8E8F0;   /* Off-white body text */
  --color-muted:     #6B7280;   /* Subdued labels & captions */
  --color-glow:      rgba(124, 92, 255, 0.3); /* Glow shadow for neon FX */
}
```

```
Color System
───────────────────────────────────────────
  ██  #050505  —  AMOLED Black     (BG)
  ██  #0D0D0D  —  Surface
  ██  #1A1A2E  —  Border
  ██  #7C5CFF  —  Neon Violet      (Primary)
  ██  #00D4FF  —  Electric Cyan    (Secondary)
  ██  #E8E8F0  —  Off-White        (Text)
  ██  #6B7280  —  Muted Gray
───────────────────────────────────────────
```

---

## ⚡ Performance

Engineered to score **90+ on Lighthouse** across all categories on desktop:

| Optimization | Technique | Impact |
|:---|:---|:---|
| Single draw call rendering | `THREE.InstancedMesh` for all particles | 5,000 particles → 1 GPU call |
| GPU compositor layers | GSAP auto-adds `will-change` on animated elements | Eliminates layout thrash |
| Code splitting | Vite splits Three.js + GSAP into async chunks | Initial JS bundle < 80KB |
| Lazy section loading | `React.lazy` + `Suspense` per section | Only Hero blocks first paint |
| Re-render prevention | `useMemo` / `useCallback` for geometry & materials | Zero R3F re-mounts |
| Image compression | `vite-plugin-imagemin` → WebP with fallback | 60-80% smaller assets |
| Non-blocking scroll | Lenis uses `passive: true` event listeners | Main thread never blocked |

```
Target Lighthouse Scores
────────────────────────────
  Performance      95+  ██████████
  Accessibility    90+  █████████░
  Best Practices   100  ██████████
  SEO              100  ██████████
────────────────────────────
```

---

## 🚢 Deployment

### Vercel (Recommended — Zero Config)
```bash
npm i -g vercel
vercel --prod
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic CI/CD on every push to `main`.

**Vercel settings:**
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

> Ensure `vite.config.ts` has `base: '/repo-name/'` set if deploying to a GitHub Pages subpath.

---

## 🗺️ Roadmap

- [x] WebGL Particle System with mouse parallax
- [x] GSAP ScrollTrigger animations for all sections
- [x] Lenis smooth scrolling integration
- [x] Glassmorphism design system
- [x] Data-driven content layer (zero hardcoded JSX content)
- [x] Vite build pipeline with chunk splitting
- [ ] 🔜 **AI Chatbot widget** — Claude API integration for interactive Q&A
- [ ] 🔜 **GLTF 3D model showcase** — interactive models in Projects section
- [ ] 🔜 **Dark / Light mode toggle** with GSAP cross-fade transition
- [ ] 🔜 **Blog section** powered by MDX + syntax highlighting
- [ ] 🔜 **Framer Motion migration** for React-native animation layer
- [ ] 🔜 **Admin dashboard** for no-code content updates
- [ ] 🔜 **Playwright E2E** test suite for CI pipeline
- [ ] 🔜 **i18n support** — English / Hindi language toggle

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome and appreciated!

```bash
# 1. Fork the project on GitHub

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Commit using Conventional Commits format
git commit -m "feat: add particle color theme switcher"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the full code style guide and PR checklist before submitting.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full details.
You are free to use, modify, and distribute this project with attribution.

---

## 🙋 Connect with Me

<p align="center">
  <a href="https://github.com/prakhar9044-code">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  &nbsp;
  <a href="https://linkedin.com/in/prakhar-verma">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  &nbsp;
  <a href="mailto:prakhar@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=120&section=footer" width="100%" />

<sub>Designed & Built with ❤️ by <strong>Prakhar Verma</strong> — Powered by React, Three.js & GSAP</sub>

</div>
