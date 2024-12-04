
//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
//import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, torus;


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // ~~~~~~ Initiate add-ons ~~~~~~

    // can't use orbit controls with canvas as background
    //const controls = new OrbitControls(camera, renderer.domElement);

    // const loader = new GLTFLoader(); // to load 3d models


    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 5000;
    
    const posArray = new Float32Array(particlesCnt * 3);
    //xyz, xyz, xyz, xyz

    for(let i = 0; i < particlesCnt * 3; i++) {
        // posArray[i] = Math.random()
        posArray[i] = (Math.random() - 0.5) * 20

    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


    // Torus knot
    const geometryTorus = new THREE.TorusKnotGeometry(5, 1, 100, 16);

    // const materialTorus = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // To add texture
    //const textureTorus = new THREE.TextureLoader().load('textures/animalPrint-crop-1024.png');

    const material = new THREE.PointsMaterial({
        size: 0.05
    });

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 'yellow',
        blending: THREE.AdditiveBlending
    });


    //mesh
    torus = new THREE.Points(geometryTorus, material);
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);

    //load scene
    scene.add(torus, particlesMesh);

    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 15;


}

// Mouse
document.addEventListener('mousemove', animateParticles)

let mouseX = 0
let mouseY = 0

function animateParticles(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
}


// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.001;

   // camera.position.z += .025;

    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

const clock = new THREE.Clock()

const tick = () => 
{
    const elapsedTime = clock.getElapsedTime()

    //update objects
    //sphere.rotation.y = .05 * elapsedTime
    particlesMesh.rotation.y = -.1 * elapsedTime

    if (mouseX > 0) {
    particlesMesh.rotation.x = - mouseY * (elapsedTime * 0.00008)
    particlesMesh.rotation.y = - mouseX * (elapsedTime * 0.00008)
    }

    //renderer
    renderer.render(scene, camera)

    //repeat
    window.requestAnimationFrame(tick)
}

init(); // execute initialize function
animate(); // execute animation function
tick(); // execute star bg animation