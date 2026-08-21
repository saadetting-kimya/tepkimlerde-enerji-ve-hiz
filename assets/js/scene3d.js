/* ============================================================
   scene3d.js — paylaşılan 3B deney kabı bileşeni
   Three.js (yerel vendor, CDN bağımlılığı yok). Fare ile
   döndürülüp yakınlaştırılabilen gerçek bir cam kap + sıvı +
   kabarcık sahnesi kurar; modüller yalnızca API'yi çağırır.
   ============================================================ */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function buildBeakerGeometry() {
  // Beher profili: taban - gövde - dudak (LatheGeometry ile döndürülerek)
  const pts = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1.35, 0),
    new THREE.Vector2(1.4, 0.05),
    new THREE.Vector2(1.4, 2.55),
    new THREE.Vector2(1.48, 2.6),
    new THREE.Vector2(1.5, 2.7),
    new THREE.Vector2(1.42, 2.72),
    new THREE.Vector2(1.42, 2.62),
    new THREE.Vector2(1.32, 2.6),
  ];
  return new THREE.LatheGeometry(pts, 48);
}

/** Basit stüdyo-tarzı prosedürel bir sahneden PMREM ortam haritası üretir;
 * cam/sıvı gibi transmission malzemelerin gerçekçi yansıma/kırılma göstermesi
 * için gereklidir (harici bir HDR/görsel dosyasına ihtiyaç duymaz). */
function buildStudioEnvironment(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const envScene = new THREE.Scene();
  const grad = document.createElement("canvas");
  grad.width = 16;
  grad.height = 256;
  const ctx = grad.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#ffffff");
  g.addColorStop(0.35, "#dfe8f2");
  g.addColorStop(0.7, "#aab4c0");
  g.addColorStop(1, "#7c8794");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 16, 256);
  const tex = new THREE.CanvasTexture(grad);
  tex.colorSpace = THREE.SRGBColorSpace;
  const skyGeo = new THREE.SphereGeometry(20, 24, 24);
  const skyMat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide });
  envScene.add(new THREE.Mesh(skyGeo, skyMat));
  const bright = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  bright.position.set(3, 5, 4);
  bright.lookAt(0, 0, 0);
  envScene.add(bright);
  const rt = pmrem.fromScene(envScene, 0.04);
  pmrem.dispose();
  return rt.texture;
}

/** Yumuşak, kenarları erimiş bir "temas gölgesi" dokusu (sert kenarlı disk yerine). */
function buildShadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, "rgba(30,40,55,0.35)");
  g.addColorStop(0.6, "rgba(30,40,55,0.16)");
  g.addColorStop(1, "rgba(30,40,55,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

export function createBeakerScene(container, opts = {}) {
  const width = container.clientWidth || 300;
  const height = container.clientHeight || 260;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--ink-soft);font-size:.85rem;text-align:center;padding:14px">3B görüntüleme bu tarayıcıda desteklenmiyor.</div>';
    return { setLiquid() {}, setBubbles() {}, setLabel() {}, dispose() {} };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.environment = buildStudioEnvironment(renderer);
  scene.environmentIntensity = 1.1;

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(4.2, 2.6, 5.4);
  camera.lookAt(0, 1, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.3, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 3.5;
  controls.maxDistance = 9;
  controls.maxPolarAngle = Math.PI * 0.52;
  controls.enablePan = false;

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(4, 7, 3);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xbcd7ff, 0.5);
  fill.position.set(-4, 2, -3);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.7);
  rim.position.set(-2, 3, -5);
  scene.add(rim);

  // zemin (yumuşak temas gölgesi)
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6),
    new THREE.MeshBasicMaterial({ map: buildShadowTexture(), transparent: true, depthWrite: false })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.001;
  scene.add(floor);

  // beher (cam)
  const beakerGeo = buildBeakerGeometry();
  const beakerMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.35,
    roughness: 0.02,
    metalness: 0,
    transmission: 1,
    thickness: 0.4,
    ior: 1.45,
    specularIntensity: 1,
    envMapIntensity: 1.2,
    side: THREE.DoubleSide,
  });
  const beaker = new THREE.Mesh(beakerGeo, beakerMat);
  scene.add(beaker);

  // sıvı (transmission YOK — performans için MeshStandardMaterial; şeffaflık opacity ile verilir)
  const liquidGeo = new THREE.CylinderGeometry(1.32, 1.32, 1, 32, 1, false);
  liquidGeo.translate(0, 0.5, 0);
  const liquidMat = new THREE.MeshStandardMaterial({
    color: opts.liquidColor || 0xbdd8f5,
    transparent: true,
    opacity: 0.82,
    roughness: 0.25,
    envMapIntensity: 1,
  });
  const liquid = new THREE.Mesh(liquidGeo, liquidMat);
  liquid.scale.y = 0.001;
  scene.add(liquid);

  // kabarcıklar (havuz) — hafif malzeme (transmission yok, çok sayıda nesne olduğu için pahalı olurdu)
  const BUBBLE_COUNT = 14;
  const bubbleGeo = new THREE.SphereGeometry(1, 8, 8);
  const bubbleMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.65, roughness: 0.15, envMapIntensity: 1.4 });
  const bubbles = [];
  for (let i = 0; i < BUBBLE_COUNT; i++) {
    const m = new THREE.Mesh(bubbleGeo, bubbleMat);
    m.visible = false;
    m.userData = { speed: 0.4 + Math.random() * 0.5, wobble: Math.random() * Math.PI * 2, r: 0.03 + Math.random() * 0.06 };
    m.scale.setScalar(m.userData.r);
    scene.add(m);
    bubbles.push(m);
  }
  let bubbleIntensity = 0;

  let liquidLevel = 0;
  let liquidColorTarget = new THREE.Color(opts.liquidColor || 0xbdd8f5);

  function tickBubbles(dt) {
    if (bubbleIntensity <= 0.02) {
      bubbles.forEach((b) => (b.visible = false));
      return;
    }
    const activeCount = Math.round(BUBBLE_COUNT * Math.min(1, bubbleIntensity));
    bubbles.forEach((b, i) => {
      if (i >= activeCount) {
        b.visible = false;
        return;
      }
      if (!b.visible || b.position.y > liquidLevel * 2.55 + 0.1) {
        b.position.set((Math.random() - 0.5) * 2, 0.05, (Math.random() - 0.5) * 2);
        b.visible = true;
      }
      b.position.y += b.userData.speed * dt;
      b.userData.wobble += dt * 2;
      b.position.x += Math.sin(b.userData.wobble) * 0.004;
    });
  }

  const clock = new THREE.Clock();
  let running = true;
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    liquidMat.color.lerp(liquidColorTarget, 0.06);
    tickBubbles(dt);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  function setLiquid(levelFrac, color) {
    liquidLevel = Math.max(0.02, Math.min(1, levelFrac));
    liquid.scale.y = liquidLevel * 2.55;
    if (color != null) liquidColorTarget = new THREE.Color(color);
  }
  setLiquid(0.62, opts.liquidColor || 0xbdd8f5);

  function setBubbles(intensity) {
    bubbleIntensity = Math.max(0, Math.min(1, intensity));
  }

  function resize() {
    const w = container.clientWidth || width;
    const h = container.clientHeight || height;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  function dispose() {
    running = false;
    ro.disconnect();
    controls.dispose();
    renderer.dispose();
  }

  return { setLiquid, setBubbles, dispose, THREE, scene };
}
