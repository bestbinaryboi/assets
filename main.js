import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
const videolink="https://github.com/bestbinaryboi/assets/raw/main/Shreksophone%20(Original).mp4"
var shrekvid = document.getElementById("shrekvideoob");
//shrekvid.src=videolink;
//shrekvid.loop=true;
//shrekvid.muted=false;
//shrekvid.crossOrgin= 'anonymous';
const TexLoader = new THREE.TextureLoader();

let textures = {
    test:TexLoader.load('test.png'),
    skybox:TexLoader.load('skybox.jpg'),
    shrek: new THREE.VideoTexture(shrekvid)
}
textures.shrek.minFilter = THREE.LinearFilter;
console.log(textures.test);
textures.test.repeat.set(1,1);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,window.innerWidth/window.innerHeight,0.1,1000);

renderer.setSize( window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshPhongMaterial( {map:textures.shrek});
const cube = new THREE.Mesh(geometry, material);


const ambientLight = new THREE.AmbientLight(0xffffff,1);
scene.add(ambientLight);
camera.position.z=5;
console.log(camera.position);
console.log(cube.position);
const dl = new THREE.DirectionalLight(0xffffff,2);
dl.position.set(5,5,5);
document.addEventListener('DOMContentLoaded', function() {
scene.add(cube);
scene.add(dl);
scene.background = textures.skybox;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    
}
shrekvid.play();
animate();
});