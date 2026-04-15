/* ============================================================
   PRAKHAR VERMA — VIRTUAL DEVELOPER ROOM
   script.js — Three.js Scene, Interactions, UI Logic
   ============================================================ */

// 'use strict';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

'use strict';

// ─── PORTFOLIO DATA (embedded for standalone use) ───────────
// ... rest of your code ...
// ─── PORTFOLIO DATA (embedded for standalone use) ───────────
const PORTFOLIO = {
  personal: {
    name: "Prakhar Verma",
    title: "Elite AI & Frontend Developer",
    subtitle: "AI • Machine Learning • Web",
    bio1: "Currently pursuing B.Tech in Computer Science (AI & ML) at Lovely Professional University. Obsessed with combining the raw power of Machine Learning and LLMs with flawless, pixel-perfect frontend architectures.",
    bio2: "Whether engineering a scalable SaaS platform like Spendex AI or crafting ultra-smooth animations, core philosophy: <strong>Write clean code, build smart systems, never compromise on UX.</strong>",
    status: "Online & Ready",
    responseTime: "< 24 Hours",
    currentFocus: "AI & Scalable Architecture"
  },
  contact: {
    email: "pra9044rma@rediffmail.com",
    github: "https://github.com/prakhar9044-code",
    linkedin: "https://www.linkedin.com/in/prakharai1212",
    leetcode: "https://leetcode.com/u/jxLXeIbuH1/"
  },
  skills: {
    aiAndDataScience: [
      { name: "Python",           level: 95, color: "#FFD43B" },
      { name: "Generative AI",    level: 90, color: "#7c5cff" },
      { name: "LLMs & Prompts",   level: 92, color: "#00d4ff" },
      { name: "Machine Learning", level: 88, color: "#22c55e" },
      { name: "Data Science",     level: 85, color: "#f59e0b" },
      { name: "Midjourney",       level: 90, color: "#ec4899" }
    ],
    softwareEngineering: [
      { name: "HTML / CSS",    level: 92, color: "#f97316" },
      { name: "JavaScript",   level: 88, color: "#eab308" },
      { name: "C++",          level: 84, color: "#60a5fa" },
      { name: "Java",         level: 75, color: "#f87171" },
      { name: "PostgreSQL",   level: 82, color: "#34d399" },
      { name: "REST APIs",    level: 86, color: "#a78bfa" }
    ],
    cyberAndHardware: [
      { name: "Cybersecurity",      level: 88, color: "#22c55e" },
      { name: "Kali Linux",         level: 85, color: "#64748b" },
      { name: "Threat Intel",       level: 80, color: "#ef4444" },
      { name: "Social Engineering", level: 90, color: "#f59e0b" },
      { name: "Git",                level: 88, color: "#f97316" },
      { name: "Arduino",            level: 82, color: "#06b6d4" }
    ]
  },
  projects: [
    { id:"spendex",      title:"Spendex AI",       emoji:"💸", description:"An advanced AI-driven SaaS platform to streamline and automate expense and payroll management for modern businesses.", tech:["HTML","CSS","JS","AI Integration"], live:"https://spendex-ai-uyxw.vercel.app/",              accentColor:"#7c5cff", year:"2024" },
    { id:"civisync",     title:"CiviSync",          emoji:"🏙️", description:"A powerful civic issue reporting platform bridging the gap between citizens and authorities with real-time status updates.", tech:["Frontend UI/UX","Web Architecture","Responsive"], live:"https://civisync-rho.vercel.app/",                accentColor:"#00d4ff", year:"2024" },
    { id:"edurev",       title:"EDU REV",            emoji:"📚", description:"Educational prototype for LPU to streamline resource sharing, course management, and peer-to-peer networking.", tech:["React","Tailwind CSS","Architecture"], live:"https://edu-rev-website-prototype.vercel.app/",     accentColor:"#22c55e", year:"2024" },
    { id:"peopleconnect",title:"People Connect",     emoji:"🤝", description:"A networking and community platform designed to foster digital connections with responsive design principles.", tech:["HTML5","Modern CSS","JavaScript"], live:"https://peopleconnect-rho.vercel.app/",              accentColor:"#f59e0b", year:"2024" },
    { id:"portfolio",    title:"Portfolio V1",       emoji:"🎨", description:"The previous iteration of this personal developer portfolio, built with Vanilla HTML, CSS, and JS.", tech:["Vanilla JS","CSS Animations","Responsive"], live:"https://resume-prakharcodess.vercel.app/",          accentColor:"#ec4899", year:"2023" }
  ],
  education: [
    { period:"2025 – 2029", degree:"B.Tech CSE (AI & ML)",   school:"Lovely Professional University", status:"current",   icon:"🎓" },
    { period:"Graduated 2025", degree:"Senior Secondary (12th)", school:"The Jain International School", status:"done", icon:"🏫" },
    { period:"Graduated 2023", degree:"Higher Secondary (10th)", school:"Virendra Swarup Education Centre", status:"done", icon:"📖" }
  ],
  certifications: [
    { name:"Data Science",           issuer:"Oracle",    color:"#ef4444", link:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=A04A17CEE858F4A8CFD5CB45ABBC63AABDBA1CED20C1D2309DFD5432D6455385" },
    { name:"CyberSecurity",          issuer:"IBM",       color:"#3b82f6", link:"https://www.credly.com/badges/cd49251b-f877-44ae-8363-c688a4d7fc0a/public_url" },
    { name:"Generative AI",          issuer:"Google",    color:"#4285F4", link:"https://www.coursera.org/account/accomplishments/verify/4N6N6VEY9XY5" },
    { name:"Artificial Intelligence",issuer:"Amazon",   color:"#FF9900", link:"https://www.credly.com/badges/03de804d-b0b2-49a8-bd77-ca98772f8097" },
    { name:"Generative AI",          issuer:"SoloLearn", color:"#7c5cff", link:"https://www.sololearn.com/en/certificates/CC-WCPSZ2TP" },
    { name:"Intro to LLMs",          issuer:"SoloLearn", color:"#00d4ff", link:"https://www.sololearn.com/en/certificates/CC-WC1ZLCOY" },
    { name:"Machine Learning",       issuer:"SoloLearn", color:"#22c55e", link:"https://www.sololearn.com/en/certificates/CC-CU61JZ8H" },
    { name:"Prompt Engineering",     issuer:"SoloLearn", color:"#f59e0b", link:"https://www.sololearn.com/en/certificates/CC-VBGFKZIQ" },
    { name:"Python Basics",          issuer:"SoloLearn", color:"#FFD43B", link:"https://www.sololearn.com/en/certificates/CC-WITL9IVS" },
    { name:"Python Intermediate",    issuer:"SoloLearn", color:"#eab308", link:"https://www.sololearn.com/en/certificates/CC-9EMDNQJB" },
    { name:"HTML Programming",       issuer:"SoloLearn", color:"#f97316", link:"https://www.sololearn.com/en/certificates/CC-LQSAGVIJ" },
    { name:"CSS Fundamentals",       issuer:"SoloLearn", color:"#60a5fa", link:"https://www.sololearn.com/en/certificates/CC-3MQ5JO6Z" }
  ],
  profiles: [
    { name:"GitHub",       icon:"fab fa-github",         link:"https://github.com/prakhar9044-code",                   color:"#ffffff" },
    { name:"LinkedIn",     icon:"fab fa-linkedin",       link:"https://www.linkedin.com/in/prakharai1212",             color:"#0077b5" },
    { name:"HackerRank",   icon:"fas fa-code",           link:"https://www.hackerrank.com/profile/prakhar9044verma",    color:"#00ea64" },
    { name:"LeetCode",     icon:"fas fa-puzzle-piece",   link:"https://leetcode.com/u/jxLXeIbuH1/",                    color:"#ffa116" },
    { name:"StackOverflow",icon:"fab fa-stack-overflow", link:"https://stackoverflow.com/users/31419366/prakhar-verma", color:"#f48024" },
    { name:"GeeksForGeeks",icon:"fas fa-book",           link:"https://www.geeksforgeeks.org/user/prakhar9044verma/",   color:"#2f8d46" }
  ]
};

// ─── CONSTANTS ───────────────────────────────────────────────
const C = {
  neonBlue:   0x00d4ff,
  neonPurple: 0x7c5cff,
  neonCyan:   0x00ffdd,
  neonPink:   0xff007f,
  neonGreen:  0x22c55e,
  darkBg:     0x050508,
  surface:    0x0d0d16,
  surface2:   0x12121e,
  desk:       0x1a1a2e,
  deskLight:  0x252545,
  wall:       0x080810,
  ceiling:    0x06060f
};

// ─── SCENE STATE ─────────────────────────────────────────────
const state = {
  cameraMode: 'overview',   // 'overview' | 'projects' | 'skills' | 'contact' | 'about'
  hoveredObj: null,
  interactables: [],
  panelOpen: false,
  clock: null,
  monitorCanvas: null,
  monitorCtx: null,
  monitorTexture: null,
  monitorFrame: 0,
  particleSystem: null,
};

// Camera positions for each section
const CAM = {
  overview: { pos: [0, 5.5, 11],    target: [0, 2.5, -1.5] },
  projects: { pos: [0, 4.8, -0.5],  target: [0, 3.8, -5.2] },   // monitor
  skills:   { pos: [6.5, 4.8, -3],  target: [8.2, 4.8, -5.5] }, // bookshelf
  contact:  { pos: [3.5, 4.2, 0],   target: [3.5, 2.8, -4.5] }, // phone
  about:    { pos: [-4.5, 5.8, -3], target: [-5.5, 4.8, -8.5] } // poster
};

// ─── MAIN 3D ENGINE ──────────────────────────────────────────
class DevRoom3D {
  constructor() {
    this.renderer = null;
    this.scene    = null;
    this.camera   = null;
    this.controls = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse    = new THREE.Vector2(-9999, -9999);
    this.targetPos   = new THREE.Vector3(...CAM.overview.pos);
    this.targetLook  = new THREE.Vector3(...CAM.overview.target);
    this.currentLook = new THREE.Vector3(...CAM.overview.target);
    this.lerpFactor  = 0.04;
    this.defaultDrift = { active: true, t: 0 };
  }

  init() {
    // Renderer
    const canvas = document.getElementById('three-canvas');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.85;
    this.renderer.setClearColor(C.darkBg, 1);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(C.darkBg, 0.045);

    // Camera
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(...CAM.overview.pos);
    this.camera.lookAt(...CAM.overview.target);

    // Controls
    // this.controls = new THREE.OrbitControls(this.camera, canvas);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(...CAM.overview.target);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minPolarAngle = Math.PI / 5;
    this.controls.maxPolarAngle = Math.PI / 2.1;
    this.controls.minAzimuthAngle = -Math.PI / 3.5;
    this.controls.maxAzimuthAngle =  Math.PI / 3.5;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 16;
    this.controls.enablePan = false;
    this.controls.rotateSpeed = 0.4;

    // Clock
    state.clock = new THREE.Clock();

    // Build room
    this._buildEnvironment();
    this._buildRoom();
    this._buildDesk();
    this._buildMonitor();
    this._buildLaptop();
    this._buildBookshelf();
    this._buildPoster();
    this._buildPhone();
    this._buildAccessories();
    this._buildLighting();
    this._buildParticles();

    // Events
    window.addEventListener('resize', () => this._onResize());
    window.addEventListener('mousemove', (e) => this._onMouseMove(e));
    window.addEventListener('click', (e) => this._onClick(e));

    // Start
    this._animate();
  }

  // ─── ENVIRONMENT ──────────────────────────────────────────
  _buildEnvironment() {
    // Floor with custom shader (grid)
    const floorGeo = new THREE.PlaneGeometry(30, 30, 40, 40);
    const floorMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:      { value: 0 },
        uBaseColor: { value: new THREE.Color(0x060610) },
        uGridColor: { value: new THREE.Color(0x1a1a40) },
        uGlowColor: { value: new THREE.Color(0x00d4ff) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uBaseColor;
        uniform vec3 uGridColor;
        uniform vec3 uGlowColor;
        varying vec2 vUv;
        varying vec3 vPosition;

        float gridLine(float v, float lineWidth) {
          return smoothstep(lineWidth, 0.0, abs(mod(v - 0.5, 1.0) - 0.5));
        }

        void main() {
          vec2 uv = vUv * 20.0;
          float gx = gridLine(uv.x, 0.03);
          float gy = gridLine(uv.y, 0.03);
          float grid = max(gx, gy);

          // Pulse on main grid
          float pulse = sin(uTime * 0.5) * 0.5 + 0.5;
          vec3 gridCol = mix(uGridColor, uGlowColor, grid * pulse * 0.3);

          // Center glow
          float dist = length(vPosition.xz) / 15.0;
          float centerGlow = 1.0 - smoothstep(0.0, 1.0, dist);

          vec3 col = mix(uBaseColor, gridCol, grid * 0.7);
          col += uGlowColor * centerGlow * 0.04;

          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);
    this._floorMat = floorMat;

    // Ceiling
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(22, 18),
      new THREE.MeshStandardMaterial({ color: C.ceiling, roughness: 1, metalness: 0 })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 8.5, -1);
    this.scene.add(ceiling);

    // LED ceiling strips
    const stripMat = new THREE.MeshBasicMaterial({ color: C.neonBlue });
    for (let i = -2; i <= 2; i++) {
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.04, 12),
        stripMat.clone()
      );
      strip.position.set(i * 2, 8.45, -2);
      (strip.material).color.setHex(i % 2 === 0 ? C.neonBlue : C.neonPurple);
      this.scene.add(strip);
    }
  }

  _buildRoom() {
    const wallMat = new THREE.MeshStandardMaterial({ color: C.wall, roughness: 0.95, metalness: 0 });

    // Back wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(22, 9, 0.3), wallMat.clone());
    backWall.position.set(0, 4, -9);
    this.scene.add(backWall);

    // Left wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 9, 18), wallMat.clone());
    leftWall.position.set(-10, 4, -1);
    this.scene.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 9, 18), wallMat.clone());
    rightWall.position.set(10, 4, -1);
    this.scene.add(rightWall);

    // Neon baseboard strips
    const baseMatB = new THREE.MeshBasicMaterial({ color: C.neonBlue   });
    const baseMatP = new THREE.MeshBasicMaterial({ color: C.neonPurple });
    const baseHeight = 0.04;

    // Back wall baseboard
    const base1 = new THREE.Mesh(new THREE.BoxGeometry(22, baseHeight, 0.08), baseMatP);
    base1.position.set(0, baseHeight/2, -8.8);
    this.scene.add(base1);
    // Left baseboard
    const base2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, baseHeight, 18), baseMatB);
    base2.position.set(-9.85, baseHeight/2, -1);
    this.scene.add(base2);
    // Right baseboard
    const base3 = new THREE.Mesh(new THREE.BoxGeometry(0.08, baseHeight, 18), baseMatB);
    base3.position.set(9.85, baseHeight/2, -1);
    this.scene.add(base3);

    // Wall decorative panels (back wall texture panels)
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x0c0c1a, roughness: 0.9 });
    for (let i = -1; i <= 1; i++) {
      if (i === 0) continue; // Skip center (where poster goes)
      const panel = new THREE.Mesh(new THREE.BoxGeometry(4.5, 5, 0.05), panelMat);
      panel.position.set(i * 4.5, 4.5, -8.83);
      this.scene.add(panel);
      // Panel border glow
      const borderGeo = new THREE.EdgesGeometry(panel.geometry);
      const borderMat = new THREE.LineBasicMaterial({ color: i > 0 ? C.neonBlue : C.neonPurple, transparent: true, opacity: 0.2 });
      const border = new THREE.LineSegments(borderGeo, borderMat);
      panel.add(border);
    }
  }

  // ─── DESK ─────────────────────────────────────────────────
  _buildDesk() {
    const deskColor = new THREE.MeshStandardMaterial({ color: C.desk, roughness: 0.6, metalness: 0.1 });
    const legColor  = new THREE.MeshStandardMaterial({ color: C.deskLight, roughness: 0.5, metalness: 0.3 });

    // Desk surface
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(9, 0.12, 3.2), deskColor.clone());
    deskTop.position.set(0, 2.15, -4.5);
    deskTop.receiveShadow = true;
    this.scene.add(deskTop);

    // Desk legs
    const legPositions = [[-4, 0, -3.1], [4, 0, -3.1], [-4, 0, -5.9], [4, 0, -5.9]];
    legPositions.forEach(([x, , z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.1, 0.15), legColor);
      leg.position.set(x, 1.05, z);
      leg.castShadow = true;
      this.scene.add(leg);
    });

    // Under-desk RGB strip (emissive glow)
    const rgbMat = new THREE.MeshBasicMaterial({ color: C.neonBlue });
    const rgbStrip = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.03, 0.06), rgbMat);
    rgbStrip.position.set(0, 2.0, -3.1);
    this.scene.add(rgbStrip);

    // Desk mat / pad
    const matPad = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 0.02, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x0a0a18, roughness: 0.9 })
    );
    matPad.position.set(0.3, 2.22, -4.5);
    this.scene.add(matPad);

    // Keyboard
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x141422, roughness: 0.7, metalness: 0.2 });
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 0.75), kbMat);
    keyboard.position.set(0.3, 2.24, -4.0);
    this.scene.add(keyboard);

    // Key rows
    const keyMat = new THREE.MeshStandardMaterial({ color: 0x1e1e38, roughness: 0.5 });
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 14; col++) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.1), keyMat);
        key.position.set(-0.95 + col * 0.145 + 0.3, 2.29, -3.7 + row * 0.16 - 0.3);
        this.scene.add(key);
      }
    }
    // WASD keys slightly colored
    const wasdKeys = [[0,0],[0,1],[1,0],[2,0]];
    wasdKeys.forEach(([, ]) => {});

    // Mouse
    const mouseMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.08, 0.52),
      new THREE.MeshStandardMaterial({ color: 0x1a1a30, roughness: 0.5, metalness: 0.3 })
    );
    mouseMesh.position.set(1.6, 2.26, -4.1);
    this.scene.add(mouseMesh);
    // Mouse glow line
    const mouseLine = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.01, 0.01),
      new THREE.MeshBasicMaterial({ color: C.neonPurple })
    );
    mouseLine.position.set(0, 0.04, 0);
    mouseMesh.add(mouseLine);
  }

  // ─── MONITOR ──────────────────────────────────────────────
  _buildMonitor() {
    // Create monitor screen canvas texture
    const mc = document.createElement('canvas');
    mc.width = 640; mc.height = 400;
    state.monitorCanvas = mc;
    state.monitorCtx = mc.getContext('2d');
    state.monitorTexture = new THREE.CanvasTexture(mc);

    // Monitor frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.4, metalness: 0.6 });
    const monFrame = new THREE.Mesh(new THREE.BoxGeometry(4.4, 2.7, 0.12), frameMat);
    monFrame.position.set(0, 3.95, -5.8);
    this.scene.add(monFrame);

    // Screen
    const screenMat = new THREE.MeshBasicMaterial({ map: state.monitorTexture });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 2.4), screenMat);
    screen.position.set(0, 3.95, -5.73);
    this.scene.add(screen);
    this._monitorScreen = screen;

    // Monitor stand (neck)
    const standMat = new THREE.MeshStandardMaterial({ color: 0x0e0e1e, roughness: 0.5, metalness: 0.5 });
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.1), standMat);
    neck.position.set(0, 2.65, -5.75);
    this.scene.add(neck);
    const standBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.6), standMat);
    standBase.position.set(0, 2.21, -5.6);
    this.scene.add(standBase);

    // Monitor RGB edge glow
    const edgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(4.42, 2.72, 0.13));
    const edgeMat = new THREE.LineBasicMaterial({ color: C.neonBlue, transparent: true, opacity: 0.5 });
    const edge = new THREE.LineSegments(edgeGeo, edgeMat);
    edge.position.copy(monFrame.position);
    this.scene.add(edge);
    this._monitorEdge = edge;

    // Register as interactable
    screen.userData = { type: 'projects', label: '🖥️ Click to view Projects' };
    monFrame.userData = { type: 'projects', label: '🖥️ Click to view Projects' };
    state.interactables.push(screen, monFrame);

    // Initial canvas draw
    this._drawMonitorScreen(0);
  }

  _drawMonitorScreen(time) {
    const ctx = state.monitorCtx;
    const w = 640, h = 400;

    // Background
    ctx.fillStyle = '#020214';
    ctx.fillRect(0, 0, w, h);

    // Scan line effect
    const scanY = (time * 80) % h;
    const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.5, 'rgba(0,212,255,0.04)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, Math.max(0, scanY - 40), w, 80);

    // Header bar
    ctx.fillStyle = '#0d0d20';
    ctx.fillRect(0, 0, w, 28);
    ['#ff5f57', '#ffbd2e', '#28c840'].forEach((c, i) => {
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(16 + i * 22, 14, 6, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.font = '11px monospace';
    ctx.fillText('prakhar-dev   ×  terminal  ×  portfolio', 80, 18);

    // Code lines
    const codeLines = [
      { text: '// Welcome to Prakhar\'s Dev Room', color: '#555577' },
      { text: 'const developer = new Prakhar()', color: '#00d4ff' },
      { text: '', color: '' },
      { text: 'developer.skills = [', color: '#f8f8f2' },
      { text: '  "Python",  "GenAI",  "LLMs",', color: '#7c5cff' },
      { text: '  "HTML/CSS", "JS", "ML",', color: '#7c5cff' },
      { text: '  "Cybersecurity", "Arduino"', color: '#7c5cff' },
      { text: ']', color: '#f8f8f2' },
      { text: '', color: '' },
      { text: 'developer.projects.forEach(p => {', color: '#f8f8f2' },
      { text: '  p.deploy()  // to Vercel', color: '#22c55e' },
      { text: '})', color: '#f8f8f2' },
      { text: '', color: '' },
      { text: '// Click monitor to see projects', color: '#444466', blink: true },
    ];

    const lineH = 22;
    const startY = 48;
    ctx.font = 'bold 13px "Courier New", monospace';

    codeLines.forEach((line, i) => {
      if (!line.text) return;
      const y = startY + i * lineH;
      // Line number
      ctx.fillStyle = '#2a2a3a';
      ctx.fillText(String(i + 1).padStart(2, ' '), 12, y);
      // Code
      if (line.blink && Math.sin(time * 4) > 0) return;
      ctx.fillStyle = line.color || '#f8f8f2';
      ctx.fillText(line.text, 50, y);
    });

    // Cursor blink
    const cursorLine = 6;
    if (Math.sin(time * 3) > 0) {
      ctx.fillStyle = '#00d4ff';
      ctx.fillRect(50 + ctx.measureText(codeLines[cursorLine].text).width, 34 + cursorLine * lineH + 3, 8, 14);
    }

    // Bottom status bar
    ctx.fillStyle = '#0d0d22';
    ctx.fillRect(0, h - 22, w, 22);
    const statusItems = ['⚡ TypeScript', '⎇ main', '✓ Vercel', '🔥 Online'];
    let sx = 12;
    ctx.font = '10px monospace';
    statusItems.forEach((item, i) => {
      ctx.fillStyle = [C.neonBlue, '#7c5cff', '#22c55e', '#f59e0b'].map(c => '#' + c.toString(16).padStart(6, '0'))[i] || '#888';
      ctx.fillStyle = ['#00d4ff', '#7c5cff', '#22c55e', '#f59e0b'][i];
      ctx.fillText(item, sx, h - 7);
      sx += ctx.measureText(item).width + 20;
    });

    state.monitorTexture.needsUpdate = true;
  }

  // ─── LAPTOP ───────────────────────────────────────────────
  _buildLaptop() {
    const laptopMat = new THREE.MeshStandardMaterial({ color: 0x18182e, roughness: 0.4, metalness: 0.5 });

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.1), laptopMat);
    base.position.set(-3, 2.24, -4.5);
    this.scene.add(base);

    // Lid (angled open)
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 1.05), laptopMat.clone());
    lid.position.set(-3, 2.28, -4.5);
    lid.rotation.x = -Math.PI / 3.5;
    lid.position.set(-3, 2.78, -5.0);
    this.scene.add(lid);

    // Laptop screen (small glowing)
    const lapScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.9),
      new THREE.MeshBasicMaterial({ color: 0x0a0a2e })
    );
    lapScreen.position.copy(lid.position);
    lapScreen.position.z -= 0.04;
    lapScreen.position.y += 0.02;
    lapScreen.rotation.copy(lid.rotation);
    this.scene.add(lapScreen);

    // Apple-logo glow effect
    const logoGlow = new THREE.Mesh(
      new THREE.CircleGeometry(0.1, 16),
      new THREE.MeshBasicMaterial({ color: C.neonBlue, transparent: true, opacity: 0.3 })
    );
    const lidBack = lid.clone();
    lidBack.material = new THREE.MeshStandardMaterial({ color: 0x18182e, roughness: 0.4, metalness: 0.7,
      emissive: new THREE.Color(C.neonBlue), emissiveIntensity: 0.05 });
    lidBack.position.z += 0.1;
    this.scene.add(lidBack);
  }

  // ─── BOOKSHELF ────────────────────────────────────────────
  _buildBookshelf() {
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x10101e, roughness: 0.8 });
    const shelfGroup = new THREE.Group();
    shelfGroup.position.set(9.5, 3.5, -6.5);
    shelfGroup.rotation.y = -Math.PI / 2;

    // Frame
    const frameW = 3.2, frameH = 4.2, frameD = 0.5;
    // Back panel
    shelfGroup.add(this._box(frameW, frameH, 0.08, shelfMat, 0, frameH/2, 0));
    // Left side
    shelfGroup.add(this._box(0.1, frameH, frameD, shelfMat, -frameW/2, frameH/2, frameD/2));
    // Right side
    shelfGroup.add(this._box(0.1, frameH, frameD, shelfMat, frameW/2, frameH/2, frameD/2));
    // Bottom shelf
    shelfGroup.add(this._box(frameW, 0.08, frameD, shelfMat, 0, 0.04, frameD/2));

    // 3 shelves
    [1.15, 2.2, 3.2].forEach(y => {
      shelfGroup.add(this._box(frameW, 0.07, frameD, shelfMat, 0, y, frameD/2));
    });

    // Books on shelves
    const bookColors = [0x7c5cff, 0x00d4ff, 0xec4899, 0x22c55e, 0xf59e0b, 0xef4444, 0xa78bfa, 0xf97316];
    const bookThicknesses = [0.18, 0.14, 0.22, 0.16, 0.20, 0.12, 0.18, 0.15];

    [[1.15, 6], [2.2, 7], [3.2, 5]].forEach(([shelfY, count]) => {
      let xPos = -1.4;
      for (let b = 0; b < count; b++) {
        const bh = 0.7 + Math.random() * 0.4;
        const bt = bookThicknesses[b % bookThicknesses.length];
        const bookMat = new THREE.MeshStandardMaterial({
          color: bookColors[b % bookColors.length],
          roughness: 0.7,
          emissive: new THREE.Color(bookColors[b % bookColors.length]),
          emissiveIntensity: 0.08
        });
        const book = this._box(bt, bh, frameD - 0.1, bookMat, xPos + bt/2, shelfY + bh/2 + 0.04, frameD/2);
        shelfGroup.add(book);
        xPos += bt + 0.04;
      }
    });

    // Shelf glow strip
    const glowMat = new THREE.MeshBasicMaterial({ color: C.neonPurple, transparent: true, opacity: 0.6 });
    [1.15, 2.2, 3.2].forEach(y => {
      const glow = this._box(frameW - 0.1, 0.02, 0.04, glowMat, 0, y - 0.04, frameD + 0.01);
      shelfGroup.add(glow);
    });

    this.scene.add(shelfGroup);

    // Invisible interactable hitbox
    const shelfHit = new THREE.Mesh(
      new THREE.BoxGeometry(frameW, frameH, frameD + 0.5),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
    );
    shelfHit.position.set(9.2, 3.5 + frameH/2, -6.5);
    shelfHit.rotation.y = -Math.PI / 2;
    shelfHit.userData = { type: 'skills', label: '📚 Click to view Skills' };
    this.scene.add(shelfHit);
    state.interactables.push(shelfHit);
    this._shelfHit = shelfHit;
  }

  // ─── POSTER ───────────────────────────────────────────────
  _buildPoster() {
    // Create poster canvas texture
    const pc = document.createElement('canvas');
    pc.width = 512; pc.height = 768;
    const pCtx = pc.getContext('2d');

    // Background gradient
    const grad = pCtx.createLinearGradient(0, 0, 512, 768);
    grad.addColorStop(0, '#0b0020');
    grad.addColorStop(0.5, '#1a0030');
    grad.addColorStop(1, '#0a0015');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 512, 768);

    // Circuit-like lines
    pCtx.strokeStyle = 'rgba(124, 92, 255, 0.2)';
    pCtx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      pCtx.beginPath();
      pCtx.moveTo(Math.random() * 512, 0);
      const midX = Math.random() * 512;
      const midY = Math.random() * 768;
      pCtx.lineTo(midX, midY);
      pCtx.lineTo(Math.random() * 512, 768);
      pCtx.stroke();
    }

    // Glowing circle
    const circGrad = pCtx.createRadialGradient(256, 300, 0, 256, 300, 180);
    circGrad.addColorStop(0, 'rgba(0,212,255,0.15)');
    circGrad.addColorStop(1, 'transparent');
    pCtx.fillStyle = circGrad;
    pCtx.fillRect(0, 0, 512, 768);

    // Code symbol
    pCtx.fillStyle = 'rgba(0,212,255,0.3)';
    pCtx.font = 'bold 80px monospace';
    pCtx.textAlign = 'center';
    pCtx.fillText('</ >', 256, 280);

    // Name
    pCtx.fillStyle = '#ffffff';
    pCtx.font = 'bold 46px monospace';
    pCtx.textAlign = 'center';
    pCtx.fillText('PRAKHAR', 256, 380);
    pCtx.fillText('VERMA', 256, 440);

    // Subtitle
    pCtx.fillStyle = 'rgba(0,212,255,0.8)';
    pCtx.font = '14px monospace';
    pCtx.fillText('AI  •  ML  •  WEB  •  CYBER', 256, 500);

    // Border
    pCtx.strokeStyle = 'rgba(124,92,255,0.5)';
    pCtx.lineWidth = 3;
    pCtx.strokeRect(16, 16, 480, 736);

    const posterTex = new THREE.CanvasTexture(pc);

    // Frame
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a30, roughness: 0.5, metalness: 0.3,
      emissive: new THREE.Color(C.neonPurple), emissiveIntensity: 0.05
    });
    const frame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.5, 0.12), frameMat);
    frame.position.set(-6, 5.5, -8.83);
    this.scene.add(frame);

    // Poster surface
    const posterMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.1, 3.1),
      new THREE.MeshBasicMaterial({ map: posterTex })
    );
    posterMesh.position.set(-6, 5.5, -8.77);
    this.scene.add(posterMesh);

    // Frame glow edge
    const frameEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(2.42, 3.52, 0.13)),
      new THREE.LineBasicMaterial({ color: C.neonPurple, transparent: true, opacity: 0.6 })
    );
    frameEdge.position.copy(frame.position);
    this.scene.add(frameEdge);

    // Interactable
    frame.userData = { type: 'about', label: '🖼️ Click to learn About Me' };
    posterMesh.userData = { type: 'about', label: '🖼️ Click to learn About Me' };
    state.interactables.push(frame, posterMesh);
  }

  // ─── PHONE / TABLET ───────────────────────────────────────
  _buildPhone() {
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x18182e, roughness: 0.3, metalness: 0.7 });

    // Phone body
    const phone = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.06, 1.35), phoneMat);
    phone.position.set(3.5, 2.24, -4.8);
    phone.rotation.y = 0.3;
    this.scene.add(phone);

    // Phone screen
    const phoneScreenTex = (() => {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 512;
      const x = c.getContext('2d');
      // Dark bg
      x.fillStyle = '#050514';
      x.fillRect(0, 0, 256, 512);
      // Status bar
      x.fillStyle = '#0a0a20';
      x.fillRect(0, 0, 256, 28);
      x.fillStyle = '#00d4ff';
      x.font = '11px monospace';
      x.fillText('9:41 AM', 10, 18);
      x.fillText('📶 🔋', 190, 18);
      // App icon grid
      const icons = ['💸','🏙️','📚','🤝','🎨','📧','💼','⚡'];
      icons.forEach((icon, i) => {
        const gx = (i % 4) * 58 + 18;
        const gy = Math.floor(i / 4) * 80 + 60;
        x.fillStyle = '#1a1a35';
        x.beginPath();
        x.roundRect(gx, gy, 46, 46, 10);
        x.fill();
        x.font = '22px Arial';
        x.fillText(icon, gx + 12, gy + 32);
      });
      // Notification badge
      x.fillStyle = '#7c5cff';
      x.font = 'bold 10px monospace';
      x.fillText('📩 Message from Recruiter', 15, 250);
      x.fillStyle = 'rgba(0,212,255,0.2)';
      x.roundRect(10, 258, 236, 50, 8);
      x.fill();
      x.fillStyle = '#00d4ff';
      x.font = '10px monospace';
      x.fillText('"Impressed with your portfolio!"', 20, 280);
      x.fillText('Let\'s connect → linkedin', 20, 295);
      // Home bar
      x.fillStyle = 'rgba(255,255,255,0.2)';
      x.fillRect(90, 490, 76, 4);
      x.beginPath();
      x.roundRect(90, 490, 76, 4, 2);
      x.fill();
      return new THREE.CanvasTexture(c);
    })();

    const phoneScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.58, 1.2),
      new THREE.MeshBasicMaterial({ map: phoneScreenTex })
    );
    phoneScreen.position.set(3.5, 2.28, -4.8);
    phoneScreen.rotation.y = 0.3;
    this.scene.add(phoneScreen);

    // Phone glow border
    const phoneEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(0.72, 0.07, 1.37)),
      new THREE.LineBasicMaterial({ color: C.neonCyan, transparent: true, opacity: 0.4 })
    );
    phoneEdge.position.copy(phone.position);
    phoneEdge.rotation.copy(phone.rotation);
    this.scene.add(phoneEdge);

    // Interactable
    phone.userData = { type: 'contact', label: '📱 Click to Contact Me' };
    phoneScreen.userData = { type: 'contact', label: '📱 Click to Contact Me' };
    state.interactables.push(phone, phoneScreen);
  }

  // ─── ACCESSORIES ──────────────────────────────────────────
  _buildAccessories() {
    // Coffee mug
    const mugGeo = new THREE.CylinderGeometry(0.18, 0.15, 0.38, 16);
    const mugMat = new THREE.MeshStandardMaterial({ color: 0x1e1e30, roughness: 0.6 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.position.set(-2.0, 2.4, -4.2);
    this.scene.add(mug);
    // Steam particles above mug
    for (let i = 0; i < 3; i++) {
      const steam = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0x446688, transparent: true, opacity: 0.3 })
      );
      steam.position.set(-2.0 + (Math.random() - 0.5) * 0.2, 2.7 + i * 0.18, -4.2);
      this.scene.add(steam);
    }
    // Mug handle
    const handleGeo = new THREE.TorusGeometry(0.1, 0.025, 8, 12, Math.PI);
    const handle = new THREE.Mesh(handleGeo, mugMat);
    handle.position.set(-2.0 + 0.22, 2.4, -4.2);
    handle.rotation.z = Math.PI / 2;
    this.scene.add(handle);

    // Plant
    const potMat = new THREE.MeshStandardMaterial({ color: 0x2d1a0e, roughness: 0.9 });
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.35, 12), potMat);
    pot.position.set(-3.8, 2.38, -5.5);
    this.scene.add(pot);
    const soil = new THREE.Mesh(
      new THREE.CircleGeometry(0.21, 12),
      new THREE.MeshStandardMaterial({ color: 0x1a0e06 })
    );
    soil.rotation.x = -Math.PI/2;
    soil.position.set(-3.8, 2.56, -5.5);
    this.scene.add(soil);
    // Plant leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1a4d2e, roughness: 0.8, emissive: new THREE.Color(0x0d2618), emissiveIntensity: 0.2 });
    const leaf1 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.6, 8), leafMat);
    leaf1.position.set(-3.8, 2.85, -5.5);
    this.scene.add(leaf1);
    const leaf2 = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 8), leafMat);
    leaf2.position.set(-3.65, 3.1, -5.4);
    leaf2.rotation.z = 0.3;
    this.scene.add(leaf2);
    const leaf3 = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.4, 8), leafMat.clone());
    leaf3.position.set(-3.95, 3.05, -5.6);
    leaf3.rotation.z = -0.3;
    this.scene.add(leaf3);

    // Small cube decoration / stress cube
    const cubeMat = new THREE.MeshStandardMaterial({ color: 0x7c5cff, roughness: 0.3, metalness: 0.4, emissive: new THREE.Color(0x2a1a70), emissiveIntensity: 0.3 });
    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), cubeMat);
    cube.position.set(-2.8, 2.33, -5.2);
    cube.rotation.y = 0.5;
    cube.rotation.z = 0.2;
    this.scene.add(cube);
    this._rotatingCube = cube;

    // Award/trophy on desk
    const trophyBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.08, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x2a2010, roughness: 0.6 })
    );
    trophyBase.position.set(2.2, 2.22, -5.5);
    this.scene.add(trophyBase);
    const trophyBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.1, 0.4, 8),
      new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.3, metalness: 0.8, emissive: new THREE.Color(0x332200), emissiveIntensity: 0.1 })
    );
    trophyBody.position.set(2.2, 2.44, -5.5);
    this.scene.add(trophyBody);
    const trophyCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.06, 0.28, 8),
      new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.2, metalness: 0.9 })
    );
    trophyCup.position.set(2.2, 2.72, -5.5);
    this.scene.add(trophyCup);

    // Sticky notes on back wall
    const noteColors = [0xffec3d, 0xff6b9d, 0x7c5cff, 0x00d4ff];
    const noteTexts = ['Todo:\n- ML proj', 'PR Review\npending!', 'Deploy\nSpendex', 'LeetCode\n150+ done'];
    noteTexts.forEach((text, i) => {
      const noteMat = new THREE.MeshStandardMaterial({
        color: noteColors[i], roughness: 0.9,
        emissive: new THREE.Color(noteColors[i]), emissiveIntensity: 0.05
      });
      const note = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.02), noteMat);
      note.position.set(-1 + i * 1.5 - 2, 7.0, -8.82);
      note.rotation.z = (Math.random() - 0.5) * 0.2;
      this.scene.add(note);
    });

    // Second monitor (portrait style - right side)
    const mon2Frame = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 3.2, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.4, metalness: 0.6 })
    );
    mon2Frame.position.set(2.8, 4.2, -5.82);
    this.scene.add(mon2Frame);

    const mon2Screen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.55, 2.9),
      new THREE.MeshBasicMaterial({ color: 0x020214 })
    );
    mon2Screen.position.set(2.8, 4.2, -5.76);
    // Draw simple dashboard on second screen
    const sc2 = document.createElement('canvas');
    sc2.width = 256; sc2.height = 512;
    const sc2x = sc2.getContext('2d');
    sc2x.fillStyle = '#03030f';
    sc2x.fillRect(0, 0, 256, 512);
    sc2x.fillStyle = '#7c5cff';
    sc2x.font = 'bold 14px monospace';
    sc2x.fillText('PROJECTS', 20, 30);
    sc2x.fillStyle = 'rgba(124,92,255,0.15)';
    sc2x.fillRect(15, 40, 226, 1);
    PORTFOLIO.projects.forEach((p, i) => {
      sc2x.fillStyle = p.accentColor;
      sc2x.beginPath();
      sc2x.roundRect(15, 55 + i * 82, 226, 72, 8);
      sc2x.fill();
      sc2x.fillStyle = 'rgba(0,0,0,0.5)';
      sc2x.beginPath();
      sc2x.roundRect(15, 55 + i * 82, 226, 72, 8);
      sc2x.fill();
      sc2x.fillStyle = p.accentColor;
      sc2x.font = 'bold 11px monospace';
      sc2x.fillText(p.emoji + ' ' + p.title, 24, 75 + i * 82);
      sc2x.fillStyle = 'rgba(255,255,255,0.4)';
      sc2x.font = '9px monospace';
      sc2x.fillText(p.tech.join(' · '), 24, 92 + i * 82);
    });
    mon2Screen.material = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc2) });
    this.scene.add(mon2Screen);
    this.scene.add(mon2Frame);
  }

  // ─── LIGHTING ─────────────────────────────────────────────
  _buildLighting() {
    // Very low ambient
    const ambient = new THREE.AmbientLight(0x111133, 0.3);
    this.scene.add(ambient);

    // Ceiling fill light
    const fill = new THREE.PointLight(0x223366, 0.6, 25);
    fill.position.set(0, 8, -3);
    this.scene.add(fill);

    // Monitor glow (blue)
    const monLight = new THREE.PointLight(C.neonBlue, 1.8, 9);
    monLight.position.set(0, 4.2, -4.5);
    this.scene.add(monLight);
    this._monLight = monLight;

    // Bookshelf accent (purple)
    const shelfLight = new THREE.PointLight(C.neonPurple, 1.2, 8);
    shelfLight.position.set(8, 5, -6);
    this.scene.add(shelfLight);

    // Poster light (purple/pink)
    const posterLight = new THREE.PointLight(C.neonPurple, 1.0, 7);
    posterLight.position.set(-5, 6, -7);
    this.scene.add(posterLight);

    // Phone glow (cyan)
    const phoneLight = new THREE.PointLight(C.neonCyan, 0.8, 5);
    phoneLight.position.set(3.5, 3.5, -4);
    this.scene.add(phoneLight);

    // Desk RGB strip glow
    const deskLight = new THREE.PointLight(C.neonBlue, 0.5, 4);
    deskLight.position.set(0, 2.3, -3.2);
    this.scene.add(deskLight);

    // Spotlight from top
    const spot = new THREE.SpotLight(0x4455aa, 1.5, 18, Math.PI / 8, 0.5);
    spot.position.set(0, 8.2, -4);
    spot.target.position.set(0, 0, -4.5);
    spot.castShadow = true;
    spot.shadow.mapSize.width = 1024;
    spot.shadow.mapSize.height = 1024;
    this.scene.add(spot);
    this.scene.add(spot.target);
  }

  // ─── PARTICLES ────────────────────────────────────────────
  _buildParticles() {
    const count = 300;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const palette = [
      new THREE.Color(C.neonBlue),
      new THREE.Color(C.neonPurple),
      new THREE.Color(C.neonCyan)
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = -Math.random() * 12 - 0.5;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.y += sin(uTime * 0.5 + position.x * 0.5) * 0.15;
          pos.x += cos(uTime * 0.3 + position.z * 0.4) * 0.08;
          vec4 mvp = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvp;
          gl_PointSize = size * (300.0 / -mvp.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.2, 0.5, d);
          gl_FragColor = vec4(vColor, a * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
    });

    state.particleSystem = new THREE.Points(geo, mat);
    this.scene.add(state.particleSystem);
  }

  // ─── INTERACTION ──────────────────────────────────────────
  _onMouseMove(event) {
    this.mouse.x =  (event.clientX / window.innerWidth)  * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update cursor position
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (dot)  { dot.style.left  = event.clientX + 'px'; dot.style.top  = event.clientY + 'px'; }
    if (ring) { ring.style.left = event.clientX + 'px'; ring.style.top = event.clientY + 'px'; }

    // Tooltip position
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      tooltip.style.left = (event.clientX + 20) + 'px';
      tooltip.style.top  = (event.clientY - 10) + 'px';
    }
  }

  _onClick(event) {
    if (state.panelOpen) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(state.interactables);

    if (hits.length > 0) {
      const obj = hits[0].object;
      const type = obj.userData.type;
      if (type) this._navigateTo(type);
    }
  }

  _checkHover() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(state.interactables);
    const tooltip = document.getElementById('tooltip');

    if (hits.length > 0) {
      const obj = hits[0].object;
      document.body.classList.add('cursor-interact');
      document.body.classList.remove('cursor-hover');
      if (tooltip && obj.userData.label) {
        tooltip.innerHTML = `<span class="tooltip-icon">✦</span> ${obj.userData.label}`;
        tooltip.classList.add('visible');
      }
      state.hoveredObj = obj;
    } else {
      document.body.classList.remove('cursor-interact');
      if (tooltip) tooltip.classList.remove('visible');
      state.hoveredObj = null;
    }
  }

  // ─── CAMERA TRANSITIONS ───────────────────────────────────
  _navigateTo(section) {
    const config = CAM[section];
    if (!config) return;
    state.cameraMode = section;

    this.targetPos.set(...config.pos);
    this.targetLook.set(...config.target);
    this.defaultDrift.active = false;
    this.controls.enabled = false;
    this.lerpFactor = 0.035;

    // Open panel
    setTimeout(() => UI.openPanel(section), 600);
    document.getElementById('btn-back').classList.add('visible');
  }

  returnToOverview() {
    state.cameraMode = 'overview';
    this.targetPos.set(...CAM.overview.pos);
    this.targetLook.set(...CAM.overview.target);
    this.lerpFactor = 0.04;

    setTimeout(() => {
      this.controls.target.set(...CAM.overview.target);
      this.controls.enabled = true;
      this.defaultDrift.active = true;
    }, 1200);
    document.getElementById('btn-back').classList.remove('visible');
  }

  // ─── RENDER LOOP ──────────────────────────────────────────
  _animate() {
    requestAnimationFrame(() => this._animate());
    const elapsed = state.clock.getElapsedTime();
    const delta   = state.clock.getDelta ? 0.016 : 0.016;

    // Floor shader
    if (this._floorMat) this._floorMat.uniforms.uTime.value = elapsed;

    // Particles
    if (state.particleSystem) state.particleSystem.material.uniforms.uTime.value = elapsed;

    // Monitor screen animation
    if (state.monitorTexture) this._drawMonitorScreen(elapsed);

    // Monitor edge glow pulse
    if (this._monitorEdge) {
      const pulse = (Math.sin(elapsed * 2) + 1) / 2;
      this._monitorEdge.material.opacity = 0.3 + pulse * 0.5;
    }
    // Monitor light pulse
    if (this._monLight) {
      this._monLight.intensity = 1.4 + Math.sin(elapsed * 1.5) * 0.4;
    }

    // Rotating desk cube
    if (this._rotatingCube) {
      this._rotatingCube.rotation.y = elapsed * 0.8;
      this._rotatingCube.rotation.x = elapsed * 0.4;
    }

    // Raycaster hover check
    this._checkHover();

    // Camera smooth lerp to target
    this.camera.position.lerp(this.targetPos, this.lerpFactor);
    this.currentLook.lerp(this.targetLook, this.lerpFactor);

    if (state.cameraMode === 'overview' && this.defaultDrift.active) {
      // Subtle idle drift for overview
      const driftX = Math.sin(elapsed * 0.12) * 0.4;
      const driftY = Math.cos(elapsed * 0.08) * 0.15;
      this.camera.position.x = CAM.overview.pos[0] + driftX;
      this.camera.position.y = CAM.overview.pos[1] + driftY;
    }

    this.camera.lookAt(this.currentLook);
    if (this.controls && this.controls.enabled) this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ─── HELPER ───────────────────────────────────────────────
  _box(w, h, d, mat, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true; m.receiveShadow = true;
    return m;
  }
}

// ─── UI MANAGER ──────────────────────────────────────────────
const UI = {
  panels: {},
  activePanel: null,
  backdrop: null,

  init() {
    this.panels = {
      about:    document.getElementById('panel-about'),
      skills:   document.getElementById('panel-skills'),
      projects: document.getElementById('panel-projects'),
      contact:  document.getElementById('panel-contact'),
    };
    this.backdrop = document.getElementById('panel-backdrop');
    this._buildPanelContent();
    this._bindNavLinks();
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeAll(); });
  },

  _buildPanelContent() {
    this._buildAbout();
    this._buildSkills();
    this._buildProjects();
    this._buildContact();
  },

  _buildAbout() {
    const p = PORTFOLIO;
    document.getElementById('about-content').innerHTML = `
      <div class="about-avatar">👨‍💻</div>
      <p class="about-bio">${p.personal.bio1}</p>
      <p class="about-bio">${p.personal.bio2}</p>
      <div class="about-stats">
        <div class="stat-card"><div class="stat-val">5+</div><div class="stat-label">Projects</div></div>
        <div class="stat-card"><div class="stat-val">13+</div><div class="stat-label">Certifications</div></div>
        <div class="stat-card"><div class="stat-val">AI/ML</div><div class="stat-label">Focus Area</div></div>
      </div>
      <div class="divider"></div>
      <div class="section-label">🎓 Education</div>
      <div class="edu-timeline">
        ${p.education.map(e => `
          <div class="edu-item">
            <div class="edu-dot">${e.icon}</div>
            <div>
              <div class="edu-period">${e.period}</div>
              <div class="edu-degree">${e.degree}</div>
              <div class="edu-school">${e.school}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="divider"></div>
      <div class="section-label">🔗 Profiles</div>
      <div class="profile-grid">
        ${p.profiles.map(pr => `<a href="${pr.link}" target="_blank" class="profile-chip"><i class="${pr.icon}" style="color:${pr.color}"></i>${pr.name}</a>`).join('')}
      </div>
      <div class="about-links" style="margin-top:1.5rem">
        <a href="mailto:${p.contact.email}" class="about-link"><i class="fas fa-envelope"></i> Email Me</a>
        <a href="${p.contact.github}" target="_blank" class="about-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="${p.contact.linkedin}" target="_blank" class="about-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="#" class="resume-btn" onclick="showToast('info','Resume download coming soon!');return false"><i class="fas fa-file-pdf"></i> Download CV</a>
      </div>
    `;
  },

  _buildSkills() {
    const s = PORTFOLIO.skills;
    const catConfig = [
      { key: 'aiAndDataScience',   label: '🧠 AI & Data Science',    cls: 'ai',  icon: 'fas fa-brain' },
      { key: 'softwareEngineering',label: '⚙️ Software Engineering',  cls: 'dev', icon: 'fas fa-code' },
      { key: 'cyberAndHardware',   label: '🛡️ Cyber & Hardware',      cls: 'cyber',icon:'fas fa-shield-halved' }
    ];

    document.getElementById('skills-content').innerHTML = catConfig.map(cat => `
      <div class="skills-category">
        <div class="skills-cat-title ${cat.cls}"><i class="${cat.icon}"></i> ${cat.label}</div>
        ${s[cat.key].map(skill => `
          <div class="skill-item">
            <div class="skill-row">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-pct">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar" data-level="${skill.level}" style="background: linear-gradient(90deg, ${skill.color}88, ${skill.color}); width:0%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('') + `
      <div class="divider"></div>
      <div class="section-label">🏅 Certifications</div>
      <div class="cert-grid">
        ${PORTFOLIO.certifications.map(c => `
          <a href="${c.link||'#'}" target="_blank" class="cert-card">
            <div class="cert-dot" style="background:${c.color};box-shadow:0 0 8px ${c.color}"></div>
            <div class="cert-info">
              <div class="cert-name">${c.name}</div>
              <div class="cert-issuer">${c.issuer}</div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  },

  _buildProjects() {
    document.getElementById('projects-content').innerHTML = `
      <div class="projects-grid">
        ${PORTFOLIO.projects.map(p => `
          <div class="project-card" style="--accent:${p.accentColor}">
            <div class="project-card-top" style="background:linear-gradient(90deg,${p.accentColor},transparent)"></div>
            <div class="project-card-body">
              <span class="project-emoji">${p.emoji}</span>
              <div class="project-title">${p.title}</div>
              <div class="project-desc">${p.description}</div>
              <div class="project-tags">
                ${p.tech.map(t => `<span class="project-tag" style="color:${p.accentColor};border-color:${p.accentColor}44">${t}</span>`).join('')}
              </div>
              <div class="project-footer">
                <span class="project-year">${p.year}</span>
                <a href="${p.live}" target="_blank" class="project-live"><i class="fas fa-external-link-alt"></i> Live Demo</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  _buildContact() {
    const c = PORTFOLIO.contact;
    document.getElementById('contact-content').innerHTML = `
      <a href="mailto:${c.email}" class="contact-info-row">
        <div class="contact-icon" style="background:rgba(124,92,255,0.15);color:#7c5cff"><i class="fas fa-envelope"></i></div>
        <div><div class="contact-val">${c.email}</div><div class="contact-label">Email — Fastest response</div></div>
      </a>
      <a href="${c.github}" target="_blank" class="contact-info-row">
        <div class="contact-icon" style="background:rgba(255,255,255,0.08);color:#fff"><i class="fab fa-github"></i></div>
        <div><div class="contact-val">prakhar9044-code</div><div class="contact-label">GitHub</div></div>
      </a>
      <a href="${c.linkedin}" target="_blank" class="contact-info-row">
        <div class="contact-icon" style="background:rgba(0,119,181,0.15);color:#0077b5"><i class="fab fa-linkedin"></i></div>
        <div><div class="contact-val">prakharai1212</div><div class="contact-label">LinkedIn</div></div>
      </a>
      <div class="divider"></div>
      <div class="section-label">✉️ Send a Message</div>
      <form class="contact-form" onsubmit="UI.handleContactSubmit(event)">
        <div class="form-row">
          <div class="form-group">
            <input id="c-name" type="text" class="form-input" placeholder=" " required />
            <label for="c-name" class="form-label">Your Name</label>
          </div>
          <div class="form-group">
            <input id="c-email" type="email" class="form-input" placeholder=" " required />
            <label for="c-email" class="form-label">Email</label>
          </div>
        </div>
        <div class="form-group">
          <textarea id="c-msg" class="form-input" rows="4" placeholder=" " required></textarea>
          <label for="c-msg" class="form-label">Your Message</label>
        </div>
        <button type="submit" class="form-submit">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </form>
    `;
  },

  handleContactSubmit(e) {
    e.preventDefault();
    const name  = document.getElementById('c-name').value;
    const email = document.getElementById('c-email').value;
    const msg   = document.getElementById('c-msg').value;
    const subj  = encodeURIComponent(`Portfolio Inquiry: ${name}`);
    const body  = encodeURIComponent(`Hello Prakhar,\n\n${msg}\n\nBest regards,\n${name}\n(${email})`);
    window.location.href = `mailto:pra9044rma@rediffmail.com?subject=${subj}&body=${body}`;
    showToast('success', 'Opening your mail client...');
  },

  openPanel(type) {
    this.closeAll();
    const panel = this.panels[type];
    if (!panel) return;
    state.panelOpen = true;
    this.activePanel = type;
    panel.classList.add('open');
    this.backdrop.classList.add('active');

    // Animate skill bars after opening
    if (type === 'skills') {
      setTimeout(() => {
        document.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }, 300);
    }
  },

  closeAll() {
    Object.values(this.panels).forEach(p => p && p.classList.remove('open'));
    this.backdrop.classList.remove('active');
    state.panelOpen = false;
    this.activePanel = null;
    // Reset skill bars
    document.querySelectorAll('.skill-bar').forEach(b => b.style.width = '0%');
  },

  _bindNavLinks() {
    document.querySelectorAll('[data-panel]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const type = link.dataset.panel;
        room._navigateTo(type);
      });
    });
  }
};

// ─── TOAST ────────────────────────────────────────────────────
function showToast(type, message) {
  const wrap = document.getElementById('toast-wrap');
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const colors = { success: '#22c55e', error: '#ef4444', info: '#00d4ff' };
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon" style="color:${colors[type] || '#00d4ff'}">${icons[type] || 'ℹ'}</span>
    <span class="toast-text">${message}</span>
  `;
  wrap.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ─── LOADING MANAGER ─────────────────────────────────────────
function runLoader(onComplete) {
  const bar    = document.querySelector('.loader-bar');
  const status = document.querySelector('.loader-status');
  const steps = [
    { pct: 15, msg: 'Initializing Three.js Engine...' },
    { pct: 35, msg: 'Building Developer Room...' },
    { pct: 55, msg: 'Loading Portfolio Data...' },
    { pct: 72, msg: 'Setting Up Lighting & FX...' },
    { pct: 88, msg: 'Compiling Shaders...' },
    { pct: 100, msg: 'Welcome to Prakhar\'s Room ✦' }
  ];
  let i = 0;
  const run = () => {
    if (i >= steps.length) { setTimeout(onComplete, 400); return; }
    bar.style.width = steps[i].pct + '%';
    status.textContent = steps[i].msg;
    i++;
    setTimeout(run, i === steps.length ? 600 : 320 + Math.random() * 200);
  };
  run();
}

// ─── BOOT ─────────────────────────────────────────────────────
let room;

window.addEventListener('DOMContentLoaded', () => {
  runLoader(() => {
    // Hide loader
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => { loader.style.display = 'none'; }, 900);

    // Show nav + hints
    setTimeout(() => {
      document.getElementById('nav').classList.add('visible');
      document.getElementById('hint-bar').classList.add('visible');
    }, 400);

    // Init scene
    room = new DevRoom3D();
    room.init();

    // Init UI
    UI.init();

    // Back button
    document.getElementById('btn-back').addEventListener('click', () => {
      UI.closeAll();
      room.returnToOverview();
      showToast('info', 'Back to overview');
    });

    // Backdrop click closes panels
    document.getElementById('panel-backdrop').addEventListener('click', () => {
      UI.closeAll();
      room.returnToOverview();
    });

    // Close buttons
    document.querySelectorAll('.panel-close').forEach(btn => {
      btn.addEventListener('click', () => {
        UI.closeAll();
        room.returnToOverview();
      });
    });

    showToast('info', 'Click objects in the room to explore!');
  });
});
