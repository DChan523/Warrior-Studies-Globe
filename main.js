//import * as THREE from 'three'   get some error when i import the module here 
let clock = new THREE.Clock();  //creates a new clock object used to time stuff
const scene = new THREE.Scene();    //makes a new scene
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 ); //perspective on the object

const renderer = new THREE.WebGLRenderer(
    {
        antialias:true  //gets rid of some of the jaggedness
    }
); 
renderer.setSize(innerWidth, innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);// the internet said this was good
document.body.appendChild( renderer.domElement ); // adds object to page when called

time = clock.getElapsedTime();  //total time elapsed in ms since the clock was created
delta = clock.getDelta(); //time in ms between each frame

const sphere = new THREE.Mesh( 
    new THREE.SphereGeometry(5,50,50), //SphereGeometry takes 3 parameters (radius,width,height)
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('../textures/8k_earth_daymap.jpg') //what your object would look like
    }));
    
    scene.add( sphere );//adds my sphere object to the scene

    camera.position.z = 15; //must be greater than the radius of the object

    function animate() {
        requestAnimationFrame( animate );//creates a loop that will draw the scene everytime the screen is refreshed
        
        //this runs every frame assuming 60 fps
        sphere.rotation.x += delta * 1; // this controls the vertical spin for some reason
        sphere.rotation.y += 0.005; //this controls the horizontal spin

        renderer.render( scene, camera );
    };

    //this will hopefully let me click on individual continents to get a modal pop up might need to do math to do it tho
    function selectCont(){

    }

        animate();
    
