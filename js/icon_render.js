//Get imports from NPM three library package
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

console.log("Bundler Working");

let scene, camera, renderer, iconMesh, mouseX = 0, mouseY = 0;

function init() {
  // 1) Grab the <canvas id="three-canvas"> on page
  const canvas = document.querySelector('#three-canvas');
  if (canvas) { //Add check to prevent any critical js errors
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
 
  // 2) Scene & camera
  // Scene is the container to hold all 3d rendered elements and support functions (lights, camera etc)
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 3);
  scene.add(camera);

  // 3) Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
  hemi.position.set(0, 1, 0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(0.5, 1, 0.5);
  scene.add(dir);

  // 4) Load your GLB (adjust the path as needed)
  const loader = new GLTFLoader();
  loader.load(
    '../Icons/tag_folder.glb',
    (gltf) => {
      iconMesh = gltf.scene; 
      iconMesh.scale.set(1, 1, 1); //Adjust icon size here
      scene.add(iconMesh); // Push the render model into the scene
      animate();  //Call animate function after render is complete
    },
    undefined, //Do nothing during asset download (place loading bar here)
    (err) => console.error('GLB load error:', err)
  );

  // 5) Track mouse 
  //Listen for change everytime the mouse is moved contantly
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  // 6) Handle resizing 
  //Resize the canvas depending on the viewport size 
  window.addEventListener('resize', () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
 } else {
    console.log("Work section Canvas element was not found or created");
 };
}

function animate() {
  requestAnimationFrame(animate);
  if (iconMesh) {
    // tilt up to ±0.6 radians (~34°) based on cursor
    iconMesh.rotation.y = mouseX * 0.6;
    iconMesh.rotation.x = mouseY * 0.6; //Change to -mouseY to invert the mouse track
  }
  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', init);