

// changing individual properties with code and using setInterval
var rotationSpeed = 0.05;
 var myOtherBox = document.getElementById('myTorusKnot');

 function spin(){
 	myTorusKnot.object3D.rotation.x -= rotationSpeed;
 	myTorusKnot.object3D.rotation.y -= rotationSpeed;
 	//myTorusKnot.object3D.rotation.z -= rotationSpeed;
 	console.log(myTorusKnot.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps