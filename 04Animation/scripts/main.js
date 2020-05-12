

// changing individual properties with code and using setInterval
var rotationSpeed = 0.001;
 var myOtherBox = document.getElementById('myTorusKnot');

 function spin(){
 	myTorusKnot.object3D.rotation.x -= rotationSpeed;
 	myTorusKnot.object3D.rotation.y -= rotationSpeed;
 	//myTorusKnot.object3D.rotation.z -= rotationSpeed;
 	console.log(rotationSpeed);
 }

 setInterval(spin, 16); //equivalent to 60 fps