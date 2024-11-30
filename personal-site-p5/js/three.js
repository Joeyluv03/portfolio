//Flower Model BG Homepage 

//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
//import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, lotus, mixer;


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~
    scene = new THREE.Scene();

    // change scene background color
    scene.background = new THREE.Color(0x0371852);
    // scene.background = new THREE.Color(0x015220);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector("#three-container").appendChild(renderer.domElement);



    // ~~~~~~ Add lights ~~~~~~

    // ~~ add direction light to the right
    const lightRight = new THREE.DirectionalLight(0xffffff, 1);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    // Add helper to debug the light's position - COMMENT OUT WHEN DONE placing the light! https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper
    //const helperRight = new THREE.DirectionalLightHelper(lightRight, 5);
    //scene.add(helperRight);


    // ~~ add directional light to the left
    const lightLeft = new THREE.DirectionalLight(0xffff00, 0.5);
    lightLeft.position.set(-3, 2, 3);
    scene.add(lightLeft);

    //const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    //scene.add(helperLeft);



    // ~~~~~~ Initiate add-ons ~~~~~~

    //const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models



    // ~~~~~~ Create Geometry ~~~~~

    // load lotus model
    loader.load('assets/lotus.gltf', function (gltf) {
        lotus = gltf.scene;
        scene.add(lotus);
        lotus.scale.set(2, 2, 2);
        lotus.position.y = -1.5; // move down a little

        // animation!
        mixer = new THREE.AnimationMixer(lotus); // initiate mixer
        const clips = gltf.animations;  // load all clips

    });



    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 6;


}



// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    //Scroll animation
    let scrollY = window.scrollY;
    camera.position.y = scrollY * .001;

    //3d Model animation
    if (lotus) { // check to see if model loaded first

        // animation mixer update
        mixer.update(clock.getDelta());

        // lotus.rotation.y += 0.007; // 360 rotation
        lotus.rotation.y = Math.sin(Date.now() / 2000) * 1.2; // sin rotation

    }

    // always end animation loop with renderer
    renderer.render(scene, camera);
}



function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function