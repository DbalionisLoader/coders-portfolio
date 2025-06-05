//Get imports from NPM three library package
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

console.log("Bundler Working");

let scene, camera, renderer, iconMesh, mouseX = 0, mouseY = 0;

function isMobileDevice(){
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  console.log('isMobileDevice', isMobile);
  return isMobile;
}


function initDesktop() {
  // 1) Grab the <canvas id="three-canvas"> on page
  const canvas = document.querySelector('#three-canvas');
  
  if (!canvas) { //Add check to prevent any critical js errors
    console.log("Work section Canvas element was not found or created");
    return;
  };

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
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient); 

 
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
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
      changeMeterialProperty(iconMesh);
      iconMesh.scale.set(1, 1, 1); //Adjust icon size here IMPORTANT
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
  window.addEventListener('resize', handleResize.bind(null, canvas, camera, renderer));
}

//MOBILE ONLY RENDER (REDUCE LAG AND CHANGE TO TOUCH INTERACTION)

function initMobile(){
  const canvas = document.querySelector('#three-canvas');

  if (!canvas) { //Add check to prevent any critical js errors
    console.log("Work section Canvas element was not found or created");
    return;
  };

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true
  });

  const DPR = Math.min(window.devicePixelRatio, 1.2);
  renderer.setPixelRatio(DPR);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  //Set Scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 3);
  scene.add(camera);

  //Add light (exluded for test)
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
  // Optional: a single, very dim directional just for a tiny bit of shading
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(0.5, 1, 0.5);
  scene.add(dir);
  
  //Load asset
  const loader = new GLTFLoader();
  loader.load('../Icons/tag_folder.glb',
    (gltf) => {
      iconMesh = gltf.scene;
      changeMeterialProperty(iconMesh);
      iconMesh.scale.set(0.8, 0.8, 0.8);
      scene.add(iconMesh); //Add the asset to scene
      animate();
  },
   undefined, //Do nothing during asset download (place loading bar here)
   (err) => console.error('GLB load error:', err)
  );

  let isDragging = false;
  let startX = 0, startY = 0;
  let startRotX = 0, startRotY = 0;

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startRotX = iconMesh?.rotation.x || 0;
      startRotY = iconMesh?.rotation.y || 0;
    }
  });
  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || !iconMesh) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    iconMesh.rotation.y = startRotY + dx * 0.005;
    iconMesh.rotation.x = startRotX + dy * 0.005;
  });
  canvas.addEventListener('touchend', () => {
    isDragging = false;
  });

  //Add device tilt viewing
   window.addEventListener('deviceorientation', (event) => {
    if (!iconMesh) return;
    const tiltX = THREE.MathUtils.degToRad(event.beta) * 0.002;
    const tiltY = THREE.MathUtils.degToRad(event.gamma) * 0.002;
    iconMesh.rotation.x = THREE.MathUtils.clamp(tiltX, -0.5, 0.5);
    iconMesh.rotation.y = THREE.MathUtils.clamp(tiltY, -0.5, 0.5);
  }); 
  
  window.addEventListener('resize', handleResize.bind(null, canvas, camera, renderer));

}

function handleResize(canvas, camera, renderer){
    window.addEventListener('resize', () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
}

function changeMeterialProperty(root){
   root.traverse((child) => { //Loop all render surfaces and change meterial properties to reflect light correctly
        if (child.isMesh && child.material.isMeshStandardMaterial) {
          child.material.metalness = 0;
          child.material.roughness = 1;
          child.material.needsUpdate = true;
        }
      });
}

function animate() {
  requestAnimationFrame(animate);
  
  if (!isMobileDevice() && iconMesh) {
    // tilt up to ±0.6 radians (~34°) based on cursor
    iconMesh.rotation.y = mouseX * 0.6;
    iconMesh.rotation.x = mouseY * 0.6; //Change to -mouseY to invert the mouse track
  }

  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {
  if(isMobileDevice()){
    initMobile();
  } 
  else {
    initDesktop();
  }
});

