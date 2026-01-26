// =========================
// LISTA COMPLETA DE APPS
// =========================

const APPS = [
  { name: "Almas Conectadas", url: "https://alexxanorafa.github.io/Almas-Conectadas/" },
  { name: "Alquimia dos Sentimentos", url: "https://alexxanorafa.github.io/Alquimia-dos-Sentimentos/" },
  { name: "Animais de Poder", url: "https://alexxanorafa.github.io/Animais-de-Poder/" },
  { name: "ANIMA", url: "https://alexxanorafa.github.io/ANIMA/" },
  { name: "ANIMA II", url: "https://alexxanorafa.github.io/ANIMA-II/" },
  { name: "Anéis da Sabedoria", url: "https://alexxanorafa.github.io/Aneis_da_Sabedoria/" },
  { name: "Árvore da Vida", url: "https://alexxanorafa.github.io/Arvore-da-Vida/" },
  { name: "Biblioteca Onírica", url: "https://alexxanorafa.github.io/Biblioteca-Onirica/" },
  { name: "Búzios", url: "https://alexxanorafa.github.io/Buzios/" },
  { name: "Cartas de Sibila", url: "https://alexxanorafa.github.io/Cartas-de-Sibila/" },
  { name: "Do you love me?", url: "https://alexxanorafa.github.io/Do-you-love-me/" },
  { name: "ECO-SAPIENS", url: "https://alexxanorafa.github.io/ECO-SAPIENS/" },
  { name: "Entrecamadas", url: "https://alexxanorafa.github.io/Entrecamadas-Telepatia-Proposito/" },
  { name: "Experiência Sensorial", url: "https://alexxanorafa.github.io/Experiencia-Sensorial/" },
  { name: "I Ching Virtual", url: "https://alexxanorafa.github.io/I-Ching-Virtual/" },
  { name: "Intervalo de Luz", url: "https://alexxanorafa.github.io/Intervalo-de-Luz/" },
  { name: "Jornada Arquetípica", url: "https://alexxanorafa.github.io/Jornada-Arquetipica/" },
  { name: "Jornada Mitológica", url: "https://alexxanorafa.github.io/Jornadas-Mitologica/" },
  { name: "Livro das Sombras", url: "https://alexxanorafa.github.io/Livro-das-Sombras/" },
  { name: "Magia das Cores", url: "https://alexxanorafa.github.io/Magia-das-Cores/" },
  { name: "Murmúrios do Destino", url: "https://alexxanorafa.github.io/Murmurios-do-Destino/" },
  { name: "Nexus", url: "https://alexxanorafa.github.io/Nexus/" },
  { name: "O Construtor do Destino", url: "https://alexxanorafa.github.io/O-Construtor-do-Destino/" },
  { name: "Oráculo das Pedras", url: "https://alexxanorafa.github.io/Oraculo-das-Pedras/" },
  { name: "Oráculo dos Deuses", url: "https://alexxanorafa.github.io/Oraculo-dos-Deuses/" },
  { name: "Oráculo Numerológico", url: "https://alexxanorafa.github.io/Oraculo-Numerologico/" },
  { name: "Pêndulo Divinatório", url: "https://alexxanorafa.github.io/Pendulo-Divinatorio/" },
  { name: "Portal das Almas", url: "https://alexxanorafa.github.io/Portal-das-Almas/" },
  { name: "Posicionamento dos Astros", url: "https://alexxanorafa.github.io/posicionamentodosastros/" },
  { name: "Potencial Coletivo", url: "https://alexxanorafa.github.io/Potencial-Coletivo/" },
  { name: "PROJECT AETHER", url: "https://alexxanorafa.github.io/PROJECT-AETHER/" },
  { name: "Quantum Oracle", url: "https://alexxanorafa.github.io/Quantum-Oracle/" },
  { name: "Runas Celtas", url: "https://alexxanorafa.github.io/Runas-Celtas/" },
  { name: "Runas Estelares", url: "https://alexxanorafa.github.io/Runas-Estelares/" },
  { name: "Runas Nórdicas", url: "https://alexxanorafa.github.io/Runas-do-Destino/" },
  { name: "Simulador Quântico", url: "https://alexxanorafa.github.io/Simulador-Quantico/" },
  { name: "Tabuleiro Ouija", url: "https://alexxanorafa.github.io/Tabuleiro-Ouija/" },
  { name: "Tarô de Marselha", url: "https://alexxanorafa.github.io/TarodeMarselha/" },
  { name: "Tasseografia", url: "https://alexxanorafa.github.io/Tasseografia/" },
  { name: "Tempo e Sonhos", url: "https://alexxanorafa.github.io/Tempo_e_Sonhos/" },
  { name: "The Da Vinci Code", url: "https://alexxanorafa.github.io/The-Da-Vinci-Code/" },
  { name: "Velvet Quantum", url: "https://alexxanorafa.github.io/Velvet-Quantum/" },
  { name: "Vitruvian Resonance", url: "https://alexxanorafa.github.io/Vitruvian-Resonance/" },
  { name: "Vitruvian Resonance II", url: "https://alexxanorafa.github.io/Vitruvian-Resonance-II/" },
  { name: "Whispering Shadows", url: "https://alexxanorafa.github.io/Whispering-Shadows/" },
  { name: "Whispering Shadows II", url: "https://alexxanorafa.github.io/Whispering-Shadows-2/" },
  { name: "Whispering Shadows III", url: "https://alexxanorafa.github.io/Whispering-Shadows-3/" },
  { name: "Xamanismo Animal", url: "https://alexxanorafa.github.io/Xamanismo-Animal/" }
];

// Ordenar alfabeticamente
APPS.sort((a, b) => a.name.localeCompare(b.name));


// =========================
// SETUP THREE.JS
// =========================

const container = document.getElementById("ecosystem-container");
const mouseParticle = document.getElementById("mouse-particle");

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02030a, 0.035);

const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);
camera.position.set(0, 0, 260);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);


// =========================
// LUZ
// =========================

scene.add(new THREE.AmbientLight(0x8899ff, 0.6));

const pointLight = new THREE.PointLight(0x8899ff, 1.2, 800);
pointLight.position.set(0, 80, 200);
scene.add(pointLight);


// =========================
// PARTÍCULAS 3D
// =========================

const particleCount = 1600;
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const speeds = new Float32Array(particleCount * 3);

const radius = 420;

for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);

    speeds[i3] = (Math.random() - 0.5) * 0.02;
    speeds[i3 + 1] = (Math.random() - 0.5) * 0.02;
    speeds[i3 + 2] = (Math.random() - 0.5) * 0.02;
}

particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: 0x7f8cff,
    size: 2.0,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);


// =========================
// LABELS DAS APPS
// =========================

const appNodes = [];
const appLabels = [];

const labelLayer = document.createElement("div");
labelLayer.style.position = "fixed";
labelLayer.style.inset = "0";
labelLayer.style.pointerEvents = "none";
container.appendChild(labelLayer);


// =========================
// DISTRIBUIÇÃO EM ANÉIS
// =========================

function distributeApps(nodes) {
    const total = nodes.length;
    const rings = Math.ceil(Math.sqrt(total));
    const radiusStep = 55;
    const baseZ = -40;

    let index = 0;

    for (let r = 0; r < rings; r++) {
        const itemsInRing = Math.ceil((2 * Math.PI * (r + 1)) / 0.55);
        const radius = (r + 1) * radiusStep;

        for (let i = 0; i < itemsInRing && index < total; i++, index++) {
            const angle = (i / itemsInRing) * Math.PI * 2;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle) * 0.55;
            const z = baseZ + r * 8;

            nodes[index].position.set(x, y, z);
            nodes[index].userData.basePosition = nodes[index].position.clone();
        }
    }
}


// =========================
// CRIAR NÓS E LABELS
// =========================

APPS.forEach((app) => {
    const node = new THREE.Object3D();
    node.userData = {
        velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08
        ),
        app
    };
    scene.add(node);
    appNodes.push(node);

    const label = document.createElement("div");
    label.className = "app-label";
    label.style.pointerEvents = "auto";

    const titleEl = document.createElement("div");
    titleEl.className = "app-title";
    titleEl.textContent = app.name;

    label.appendChild(titleEl);

    label.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = app.url;
    });

    labelLayer.appendChild(label);
    appLabels.push(label);
});

distributeApps(appNodes);


// =========================
// RATO COMO PARTÍCULA
// =========================

const mouse = new THREE.Vector2(0, 0);
const mouse3D = new THREE.Vector3(0, 0, 0);
const raycaster = new THREE.Raycaster();

window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;

    mouseParticle.style.left = x + "px";
    mouseParticle.style.top = y + "px";

    raycaster.setFromCamera(mouse, camera);
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(planeZ, intersection);
    mouse3D.copy(intersection);
});


// =========================
// RESIZE
// =========================

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// =========================
// ANIMAÇÃO
// =========================

let lastTime = performance.now();

function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const delta = (now - lastTime) / 1000;
    lastTime = now;

    // Rotação suave da cena (semi-estável)
    scene.rotation.y += 0.01 * delta;

    // Partículas (respiração leve)
    const pos = particleGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += speeds[i3] * delta * 60;
        pos[i3 + 1] += speeds[i3 + 1] * delta * 60;
        pos[i3 + 2] += speeds[i3 + 2] * delta * 60;

        const len = Math.sqrt(
            pos[i3] * pos[i3] +
            pos[i3 + 1] * pos[i3 + 1] +
            pos[i3 + 2] * pos[i3 + 2]
        );
        if (len > radius) {
            const factor = radius / len;
            pos[i3] *= factor;
            pos[i3 + 1] *= factor;
            pos[i3 + 2] *= factor;
        }
    }
    particleGeometry.attributes.position.needsUpdate = true;

    // Apps (semi-estáveis + influência do rato)
    const mouseInfluenceRadius = 120;
    const mouseForceStrength = 18;
    const returnStrength = 0.6;

    appNodes.forEach((node, idx) => {
        const data = node.userData;
        const toMouse = new THREE.Vector3().subVectors(node.position, mouse3D);
        const dist = toMouse.length();

        if (dist < mouseInfluenceRadius) {
            const force = toMouse
                .normalize()
                .multiplyScalar(
                    (mouseForceStrength * (mouseInfluenceRadius - dist)) /
                    mouseInfluenceRadius
                );
            data.velocity.add(force.multiplyScalar(delta));
        }

        const toBase = new THREE.Vector3().subVectors(
            data.basePosition,
            node.position
        );
        data.velocity.add(toBase.multiplyScalar(returnStrength * delta));

        data.velocity.multiplyScalar(0.9);

        node.position.addScaledVector(data.velocity, delta * 60);

        // Projeção 3D -> 2D para labels
        const label = appLabels[idx];
        const projected = node.position.clone();
        projected.project(camera);

        const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;

        if (projected.z < 1) {
            label.style.display = "block";
            label.style.left = x + "px";
            label.style.top = y + "px";
            label.style.opacity = 0.6 + (1 - projected.z) * 0.4;
        } else {
            label.style.display = "none";
        }

        // Hover visual (aproximação do rato)
        const screenMouse = new THREE.Vector2(
            (mouse.x + 1) * 0.5 * window.innerWidth,
            (1 - (mouse.y + 1) * 0.5) * window.innerHeight
        );
        const dx = x - screenMouse.x;
        const dy = y - screenMouse.y;
        const d2 = Math.sqrt(dx * dx + dy * dy);

        if (d2 < 90) {
            label.classList.add("hovered");
        } else {
            label.classList.remove("hovered");
        }
    });

    renderer.render(scene, camera);
}


animate();

