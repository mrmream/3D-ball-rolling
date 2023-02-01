var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({canvas: gameCanvas});
renderer.setClearColor(0x808080)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

// create a light source
var light = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
light.position.set( 50, 50, 50 );
light.castShadow = true;
scene.add( light );

// create the sphere
var sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xA05A9C } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true;
sphere.receiveShadow = true;
sphere.position.set(0, 10, 0);
scene.add( sphere );

// create the ground plane
var planeGeometry = new THREE.PlaneGeometry( 100, 100 );
var planeMaterial = new THREE.MeshLambertMaterial( { color: 0x808080 } );
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI/2;
plane.receiveShadow = true;
scene.add( plane );

camera.position.z = 30;

var render = function () {
  requestAnimationFrame( render );
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render( scene, camera );
};

// adjust camera angle using arrow keys
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      camera.position.x -= 5;
      break;
    case 38: // up arrow
      camera.position.z -= 5;
      break;
    case 39: // right arrow
      camera.position.x += 5;
      break;
    case 40: // down arrow
      camera.position.z += 5;
      break;
  }
};

render();


