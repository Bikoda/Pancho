function option11(){
document.getElementById('cajas').style.display = 'block';	
document.getElementById('verde').style.display = 'block';
document.getElementById('azul').style.display = 'none';
document.getElementById('rosa').style.display = 'none';
document.getElementById('marron').style.display = 'none';
}

function option22(){
document.getElementById('cajas').style.display = 'block';	
document.getElementById('azul').style.display = 'block';	
document.getElementById('verde').style.display = 'none';
document.getElementById('rosa').style.display = 'none';
document.getElementById('marron').style.display = 'none';
}

function option33(){
document.getElementById('cajas').style.display = 'block';	
document.getElementById('rosa').style.display = 'block';
document.getElementById('azul').style.display = 'none';
document.getElementById('azul').style.display = 'none';
document.getElementById('marron').style.display = 'none';
}

function option44(){
document.getElementById('cajas').style.display = 'block';
document.getElementById('marron').style.display = 'block';
document.getElementById('azul').style.display = 'none';
document.getElementById('rosa').style.display = 'none';
document.getElementById('verde').style.display = 'none';
}

function option2(){
	alert("You have no messages.");
}
function singup1(){
document.getElementById('singup').style.display = 'block';
document.getElementById('cajas').style.display = 'none';
document.getElementById('triangles').style.display = 'none';
document.getElementById('login').style.display = 'none';
}
function login1(){
document.getElementById('login').style.display = 'block';
document.getElementById('triangles').style.display = 'none';
document.getElementById('singup').style.display = 'none';
document.getElementById('cajas').style.display = 'none';
}
function cajas1(){
document.getElementById('cajas').style.display = 'block';
document.getElementById('triangles').style.display = 'none';
document.getElementById('singup').style.display = 'none';
document.getElementById('login').style.display = 'none';
}

function triangles1(){
document.getElementById('triangles').style.display = 'block';
document.getElementById('cajas').style.display = 'none';
document.getElementById('singup').style.display = 'none';
document.getElementById('login').style.display = 'none';
}

function option55(){
document.getElementById('triangles').style.display = 'block';
document.getElementById('red').style.display = 'block';
document.getElementById('yellow').style.display = 'none';
document.getElementById('verde').style.display = 'none';
document.getElementById('azul').style.display = 'none';
document.getElementById('rosa').style.display = 'none';
document.getElementById('marron').style.display = 'none';
}

function option66(){
document.getElementById('triangles').style.display = 'block';
document.getElementById('yellow').style.display = 'block';
document.getElementById('red').style.display = 'none';
document.getElementById('verde').style.display = 'none';
document.getElementById('azul').style.display = 'none';
document.getElementById('rosa').style.display = 'none';
document.getElementById('marron').style.display = 'none';
}

function optionw(){
	window.open("https://community.box.com/");
}

function log(){
document.getElementById('cajas').style.display = 'block';
document.getElementById('triangles').style.display = 'none';
document.getElementById('singup').style.display = 'none';
document.getElementById('login').style.display = 'none';
}


function input1(form){
	var value = form.search.value;
	if (value == "boxes"){
		cajas1();
	}
	else if (value == "triangles"){
		triangles1();
	}
	else if (value == "green boxes"){
		option11();
	}
	else if (value == "blue boxes"){
		option22();
	}
	else if (value == "pink boxes"){
		option33();
	}
	else if (value == "brown boxes"){
		option44();
	}	
	else if (value == "red triangles"){
		option55();
	}
	else if (value == "yellow triangles"){
		option66();
	}
	else {
		alert("not abailable");
	}
	return false;
}
