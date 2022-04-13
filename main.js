//import * as THREE from 'three'   get some error when i import the module here 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const sphere = new THREE.Mesh( 
    new THREE.SphereGeometry(5,50,50), 
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('../textures/2k_earth_daymap.jpg')
    }));
    
    scene.add( sphere );

    camera.position.z = 15;

    function animate() {
        requestAnimationFrame( animate );

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

        animate();