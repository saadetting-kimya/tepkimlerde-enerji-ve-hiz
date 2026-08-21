/* ============================================================
   scene3d-molecule.js — paylaşılan 3B molekül/çarpışma bileşeni
   Three.js (yerel vendor, CDN yok). Top-çubuk (ball-and-stick)
   modelleriyle iki molekülün gerçek 3B uzayda yaklaşıp çarpışmasını
   ve yönelimin neden önemli olduğunu gösterir. Atom renkleri gerçek/
   evrensel CPK kuralına uyar (O = kırmızı, N = mavi) — uydurma değil.
   ============================================================ */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CPK = {
  O: 0xd93b2b,
  N: 0x2b5fd9,
};
const BOND_COLOR = 0xc7ccd2;

function buildAtom(radius, color) {
  const geo = new THREE.SphereGeometry(radius, 24, 20);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.05 });
  return new THREE.Mesh(geo, mat);
}

function buildBond(a, b, radius = 0.09) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 12);
  const mat = new THREE.MeshStandardMaterial({ color: BOND_COLOR, roughness: 0.5 });
  const mesh = new THREE.Mesh(geo, mat);
  const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

/** NO: N (mavi, çekirdek) — O (kırmızı), N ucu +x yönünde (yaklaşma yönü). */
function buildNO() {
  const group = new THREE.Group();
  const n = buildAtom(0.36, CPK.N);
  const o = buildAtom(0.3, CPK.O);
  n.position.set(0.32, 0, 0);
  o.position.set(-0.32, 0, 0);
  group.add(buildBond(o.position, n.position), n, o);
  return group;
}

/** O3: bükülmüş (~117°) üç oksijen; "terminal" atom grubun +x ucunda
 * (uygun yönelimde NO'nun azotuna dönük olacak atom). */
function buildO3() {
  const group = new THREE.Group();
  const central = buildAtom(0.32, CPK.O);
  const terminal = buildAtom(0.3, CPK.O);
  const other = buildAtom(0.3, CPK.O);
  central.position.set(-0.05, 0.16, 0);
  terminal.position.set(0.42, -0.1, 0);
  other.position.set(-0.5, -0.1, 0);
  group.add(buildBond(central.position, terminal.position), buildBond(central.position, other.position));
  group.add(central, terminal, other);
  return group;
}

export function createCollisionScene(container) {
  const width = container.clientWidth || 420;
  const height = container.clientHeight || 180;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--ink-soft);font-size:.85rem;text-align:center;padding:14px">3B görüntüleme bu tarayıcıda desteklenmiyor.</div>';
    return { setState() {}, dispose() {}, THREE: null };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
  camera.position.set(0, 1.6, 6.4);
  camera.lookAt(0, 0, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 3.5;
  controls.maxDistance = 9;
  controls.enablePan = false;

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.3);
  key.position.set(3, 5, 4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xcfe0ff, 0.5);
  fill.position.set(-4, 1, -2);
  scene.add(fill);

  const noGroup = buildNO();
  const o3Group = buildO3();
  scene.add(noGroup, o3Group);

  const controls_ = controls;
  let running = true;
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    controls_.update();
    renderer.render(scene, camera);
  }
  animate();

  /** kind: "good"|"bad" · u: 0(başlangıç)-1(buluşma noktası) yaklaşma ilerlemesi
   * phase: "idle"|"approach"|"success"|"bounce" */
  function setState(kind, u, phase) {
    const startNo = -3.2, startO3 = 3.2, meet = 0.55;
    const t = Math.max(0, Math.min(1, u));
    const noX = startNo + (-meet - startNo) * t;
    const o3X = startO3 + (meet - startO3) * t;
    noGroup.position.set(noX, 0, 0);
    noGroup.rotation.set(0, 0, 0);
    o3Group.position.set(o3X, 0, 0);
    // "uygun geometri": O3'ün ucu (+x) NO'ya dönük (0 rad) · "uygun olmayan": 90° yan dönük
    o3Group.rotation.y = kind === "good" ? 0 : Math.PI / 2;

    if (phase === "success") {
      noGroup.visible = false;
      o3Group.visible = false;
    } else if (phase === "bounce") {
      noGroup.visible = true;
      o3Group.visible = true;
      noGroup.position.x -= 0.18;
      o3Group.position.x += 0.18;
    } else {
      noGroup.visible = true;
      o3Group.visible = true;
    }
  }
  setState("good", 0, "idle");

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

  return { setState, dispose, THREE };
}
