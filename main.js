//import * as THREE from 'three'   get some error when i import the module here 

let clock = new THREE.Clock();  //creates a new clock object used to time stuff
let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let pointOfIntersection = new THREE.Vector3();
let localPoint = new THREE.Vector3();
let lat, lon;
const scene = new THREE.Scene();    //makes a new scene
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //perspective on the object

const renderer = new THREE.WebGLRenderer(
    {
        antialias:true  //gets rid of some of the jaggedness
    }
); 
renderer.setSize(window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);// the internet said this was good
document.body.appendChild( renderer.domElement ); // adds object to page when called

let controls = new THREE.OrbitControls(camera, renderer.domElement); //allows camera to orbit around a target

time = clock.getElapsedTime();  //total time elapsed in ms since the clock was created
delta = clock.getDelta(); //time in ms between each frame

const material = new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load('textures/8k_earth_daymap.jpg') // maps earth texture onto our globe
                });
let geometry = new THREE.SphereGeometry(5,50,50);   //SphereGeometry takes 3 parameters (radius,width,height)

const sphere = new THREE.Mesh(geometry, material);  
    
    scene.add( sphere );//adds my sphere object to the scene

    camera.position.z = 15; //must be greater than the radius of the object            

    //drag and rotate the earth hopefully
    window.addEventListener("dragstart", sphereMove, false);
    
    function sphereMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function animate() {
        requestAnimationFrame( animate );//creates a loop that will draw the scene everytime the screen is refreshed
        
        //this runs every frame assuming 60 fps
        sphere.rotation.x += delta * 1; // this controls the vertical spin for some reason
        sphere.rotation.y += 0.0025; //this controls the horizontal spin

        renderer.render( scene, camera );
    };

    
    let nAmer = new THREE.Mesh(new THREE.SphereGeometry(0.3125, 0, 0), new THREE.MeshBasicMaterial({
        color: "red"
      }));
      nAmer.position.set(0.01, 4, 4);
      sphere.add(nAmer);
    
    let domEvents	= new THREEx.DomEvents(camera, renderer.domElement);

    domEvents.addEventListener(nAmer, 'click', function(event){
		console.log('you clicked on mesh', nAmer)
	}, false)
      

    animate();
    


        
