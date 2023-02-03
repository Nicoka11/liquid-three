import {
  WebGLRenderer,
  Scene,
  // BoxGeometry,
  Mesh,
  // MeshBasicMaterial,
  PerspectiveCamera,
  ShaderMaterial,
  PlaneGeometry,
  MathUtils,
  Clock,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import fragment from "./shaders/liquid/fragment.frag";
import vertex from "./shaders/liquid/vertex.vert";

const canvas = document.querySelector("#webgl") as HTMLCanvasElement;

const clock = new Clock();

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Box
// const geometry = new BoxGeometry(1, 1, 1);
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new Mesh(geometry, material);
// scene.add(cube);

// Plane
const planeGeo = new PlaneGeometry(3, 3, 100, 100);
const planeMaterial = new ShaderMaterial({
  uniforms: {
    u_time: { value: 0 },
  },
  fragmentShader: fragment,
  vertexShader: vertex,
  wireframe: true,
});
const plane = new Mesh(planeGeo, planeMaterial);
plane.rotateX(MathUtils.degToRad(90));

scene.add(plane);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 2;
camera.position.y = 3;
camera.position.x = 3;

function animate() {
  requestAnimationFrame(animate);
  planeMaterial.uniforms.u_time.value = clock.getElapsedTime();
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();

  renderer.render(scene, camera);
}

animate();
