console.log('Hello Person!');
console.log('THREE:', THREE);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

console.log('Hello Person1!');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
camera.position.z = 5;

console.log('Hello Person2!');
const person = document.getElementById('person');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
person.appendChild(renderer.domElement);

console.log('Hello Person3!');
let loader = new THREE.GLTFLoader();
loader.load('https://models.readyplayer.me/622618cd70f4fcd078a327fc.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    console.log('Hello Person5!');
});
