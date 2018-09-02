import * as THREE from 'three';
import vert from './vert.glsl';
import helloWorldFrag from './01-hello-world.glsl'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneBufferGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { type: 'f', value: 1.0 },
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
    u_mouse: { type: 'v2', value: new THREE.Vector2() }
  },
  vertexShader: vert,
  fragmentShader: helloWorldFrag // Switch fragment shader here
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
