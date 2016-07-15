function option11(){
	document.getElementById('cajas').style.display = 'block';	
	document.getElementById('verde').style.display = 'block';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function option22(){
	document.getElementById('cajas').style.display = 'block';	
	document.getElementById('azul').style.display = 'block';	
	document.getElementById('verde').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function option33(){
	document.getElementById('cajas').style.display = 'block';	
	document.getElementById('rosa').style.display = 'block';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function option44(){
	document.getElementById('cajas').style.display = 'block';
	document.getElementById('marron').style.display = 'block';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function singup1(){
	document.getElementById('singup').style.display = 'block';
	document.getElementById('cajas').style.display = 'none';
	document.getElementById('triangles').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function login1(){
	document.getElementById('login').style.display = 'block';
	document.getElementById('triangles').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('cajas').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function cajas1(){
	document.getElementById('cajas').style.display = 'block';
	document.getElementById('triangles').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function triangles1(){
	document.getElementById('triangles').style.display = 'block';
	document.getElementById('cajas').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('red').style.display = 'none';
	document.getElementById('yellow').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function option55(){
	document.getElementById('triangles').style.display = 'block';
	document.getElementById('red').style.display = 'block';
	document.getElementById('yellow').style.display = 'none';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('cajas').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function option66(){
	document.getElementById('triangles').style.display = 'block';
	document.getElementById('yellow').style.display = 'block';
	document.getElementById('red').style.display = 'none';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('cajas').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function log(){
	document.getElementById('cajas').style.display = 'block';
	document.getElementById('triangles').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('generic-container').style.display = 'none';
}
function input1(form){
	var value = form.search.value;
	if (value == "boxes"){
		cajas1();
	}
	else if (value == "box"){
		cajas1();
	}
	else if (value == "square"){
		cajas1();
	}
	else if (value == "squares"){
		cajas1();
	}
	else if (value == "triangles"){
		triangles1();
	}
	else if (value == "triangle"){
		triangles1();
	}
	else if (value == "sign"){
		triangles1();
	}
	else if (value == "signs"){
		triangles1();
	}
	else if (value == "green boxes"){
		option11();
	}	
	else if (value == "green box"){
		option11();
	}
	else if (value == "green squares"){
		option11();
	}
	else if (value == "green square"){
		option11();
	}
	else if (value == "green"){
		option11();
	}
	else if (value == "square green"){
		option11();
	}
	else if (value == "squares green"){
		option11();
	}
	else if (value == "box green"){
		option11();
	}
	else if (value == "boxes green"){
		option11();
	}
	else if (value == "blue boxes"){
		option22();
	}
	else if (value == "blue box"){
		option22();
	}
	else if (value == "blue squares"){
		option22();
	}
	else if (value == "blue square"){
		option22();
	}
	else if (value == "blue"){
		option22();
	}
	else if (value == "square blue"){
		option22();
	}
	else if (value == "squares blue"){
		option22();
	}
	else if (value == "box blue"){
		option22();
	}
	else if (value == "boxes blue"){
		option22();
	}
	else if (value == "pink boxes"){
		option33();
	}
	else if (value == "pink box"){
		option33();
	}
	else if (value == "pink squares"){
		option33();
	}
	else if (value == "pink square"){
		option33();
	}
	else if (value == "pink"){
		option33();
	}
	else if (value == "square pink"){
		option33();
	}
	else if (value == "squares pink"){
		option33();
	}
	else if (value == "box pink"){
		option33();
	}
	else if (value == "boxes pink"){
		option33();
	}
	else if (value == "brown boxes"){
		option44();
	}
	else if (value == "brown squares"){
		option44();
	}
	else if (value == "brown square"){
		option44();
	}
	else if (value == "brown box"){
		option44();
	}	
	else if (value == "brown"){
		option44();
	}	
	else if (value == "box brown"){
		option44();
	}
	else if (value == "boxes brown"){
		option44();
	}
	else if (value == "square brown"){
		option44();
	}	
	else if (value == "squares brown"){
		option44();
	}				
	else if (value == "red triangles"){
		option55();
	}
	else if (value == "red triangle"){
		option55();
	}
	else if (value == "red sign"){
		option55();
	}
	else if (value == "red"){
		option55();
	}
	else if (value == "sign red"){
		option55();
	}
	else if (value == "triangle red"){
		option55();
	}
	else if (value == "yellow triangles"){
		option66();
	}
	else if (value == "yellow triangle"){
		option66();
	}
	else if (value == "yellow sign"){
		option66();
	}
	else if (value == "yellow"){
		option66();
	}
	else if (value == "sign yellow"){
		option66();
	}
	else if (value == "triangle yellow"){
		option66();
	}
	else {
		alert("not abailable");
	}
	return false;
}
var products = [{

	id: 01,
	name: "green-box1",
	price: 201,
	image: "green.png"
	},{
	id: 02,
	name: "green-box2",
	price: 202,
	image: "green.png"
	},{
	id: 03,
	name: "green-box3",
	price: 203,
	image: "green.png"
	},{
	id: 04,
	name: "green-box4",
	price: 204,
	image: "green.png"
	},{
	id: 05,
	name: "green-box5",
	price: 205,
	image: "green.png"
	},{
	id: 06,
	name: "green-box6",
	price: 206,
	image: "green.png"
	},{
	id: 07,
	name: "green-box7",
	price: 207,
	image: "green.png"
	},{
	id: 08,
	name: "green-box8",
	price: 208,
	image: "green.png"
	},{
	id: 09,
	name: "green-box9",
	price: 209,
	image: "green.png"
	},{
	id: 10,
	name: "green-box10",
	price: 210,
	image: "green.png"
	},{
	id: 11,
	name: "green-box11",
	price: 211,
	image: "green.png"
	},{
	id: 12,
	name: "green-box12",
	price: 212,
	image: "green.png"
	},{	
	id: 13,
	name: "green-box13",
	price: 213,
	image: "green.png"
	},{
	id: 14,
	name: "green-box14",
	price: 214,
	image: "green.png"
	},{
	id: 15,
	name: "green-box15",
	price: 215,
	image: "green.png"
	},{
	id: 16,
	name: "green-box16",
	price: 216,
	image: "green.png"
	},{
	id: 17,
	name: "green-box15",
	price: 217,
	image: "green.png"
	},{
	id: 18,
	name: "green-box18",
	price: 218,
	image: "green.png"
	},{
	id: 19,
	name: "blue-box1",
	price: 201,
	image: "blue.png"
	},{
	id: 20,
	name: "blue-box2",
	price: 202,
	image: "blue.png"
	},{
	id: 21,
	name: "blue-box3",
	price: 203,
	image: "blue.png"
	},{
	id: 22,
	name: "blue-box4",
	price: 204,
	image: "blue.png"
	},{
	id: 23,
	name: "blue-box5",
	price: 205,
	image: "blue.png"
	},{
	id: 24,
	name: "blue-box6",
	price: 206,
	image: "blue.png"
	},{
	id: 25,
	name: "blue-box7",
	price: 207,
	image: "blue.png"
	},{
	id: 26,
	name: "blue-box8",
	price: 208,
	image: "blue.png"
	},{
	id: 27,
	name: "blue-box9",
	price: 209,
	image: "blue.png"
	},{
	id: 28,
	name: "blue-box10",
	price: 210,
	image: "blue.png"
	},{
	id: 29,
	name: "blue-box11",
	price: 211,
	image: "blue.png"
	},{
	id: 30,
	name: "blue-box12",
	price: 212,
	image: "blue.png"
	},{	
	id: 31,
	name: "blue-box13",
	price: 213,
	image: "blue.png"
	},{
	id: 32,
	name: "blue-box14",
	price: 214,
	image: "blue.png"
	},{
	id: 33,
	name: "blue-box15",
	price: 215,
	image: "blue.png"
	},{
	id: 34,
	name: "blue-box16",
	price: 216,
	image: "blue.png"
	},{
	id: 35,
	name: "blue-box15",
	price: 217,
	image: "blue.png"
	},{
	id: 36,
	name: "blue-box18",
	price: 218,
	image: "blue.png"
	},{
	id: 37,
	name: "pink-box1",
	price: 201,
	image: "pink.png"
	},{
	id: 38,
	name: "pink-box2",
	price: 202,
	image: "pink.png"
	},{
	id: 39,
	name: "pink-box3",
	price: 203,
	image: "pink.png"
	},{
	id: 40,
	name: "pink-box4",
	price: 204,
	image: "pink.png"
	},{
	id: 41,
	name: "pink-box5",
	price: 205,
	image: "pink.png"
	},{
	id: 42,
	name: "pink-box6",
	price: 206,
	image: "pink.png"
	},{
	id: 43,
	name: "pink-box7",
	price: 207,
	image: "pink.png"
	},{
	id: 44,
	name: "pink-box8",
	price: 208,
	image: "pink.png"
	},{
	id: 45,
	name: "pink-box9",
	price: 209,
	image: "pink.png"
	},{
	id: 46,
	name: "pink-box10",
	price: 210,
	image: "pink.png"
	},{
	id: 47,
	name: "pink-box11",
	price: 211,
	image: "pink.png"
	},{
	id: 48,
	name: "pink-box12",
	price: 212,
	image: "pink.png"
	},{	
	id: 49,
	name: "pink-box13",
	price: 213,
	image: "pink.png"
	},{
	id: 50,
	name: "pink-box14",
	price: 214,
	image: "pink.png"
	},{
	id: 51,
	name: "pink-box15",
	price: 215,
	image: "pink.png"
	},{
	id: 52,
	name: "pink-box16",
	price: 216,
	image: "pink.png"
	},{
	id: 53,
	name: "pink-box15",
	price: 217,
	image: "pink.png"
	},{
	id: 54,
	name: "pink-box18",
	price: 218,
	image: "pink.png"
	},{
	id: 55,
	name: "brown-box1",
	price: 201,
	image: "brown.png"
	},{
	id: 56,
	name: "brown-box2",
	price: 202,
	image: "brown.png"
	},{
	id: 57,
	name: "brown-box3",
	price: 203,
	image: "brown.png"
	},{
	id: 58,
	name: "brown-box4",
	price: 204,
	image: "brown.png"
	},{
	id: 59,
	name: "brown-box5",
	price: 205,
	image: "brown.png"
	},{
	id: 60,
	name: "brown-box6",
	price: 206,
	image: "brown.png"
	},{
	id: 61,
	name: "brown-box7",
	price: 207,
	image: "brown.png"
	},{
	id: 62,
	name: "brown-box8",
	price: 208,
	image: "brown.png"
	},{
	id: 63,
	name: "brown-box9",
	price: 209,
	image: "brown.png"
	},{
	id: 64,
	name: "brown-box10",
	price: 210,
	image: "brown.png"
	},{
	id: 65,
	name: "brown-box11",
	price: 211,
	image: "brown.png"
	},{
	id: 66,
	name: "brown-box12",
	price: 212,
	image: "brown.png"
	},{	
	id: 67,
	name: "brown-box13",
	price: 213,
	image: "brown.png"
	},{
	id: 68,
	name: "brown-box14",
	price: 214,
	image: "brown.png"
	},{
	id: 69,
	name: "brown-box15",
	price: 215,
	image: "brown.png"
	},{
	id: 70,
	name: "brown-box16",
	price: 216,
	image: "brown.png"
	},{
	id: 71,
	name: "brown-box15",
	price: 217,
	image: "brown.png"
	},{
	id: 72,
	name: "brown-box18",
	price: 218,
	image: "brown.png"
	},{
	id: 73,
	name: "red-triangle1",
	price: 201,
	image: "red.png"
	},{
	id: 74,
	name: "red-triangle2",
	price: 202,
	image: "red.png"
	},{
	id: 75,
	name: "red-triangle3",
	price: 203,
	image: "red.png"
	},{
	id: 76,
	name: "red-triangle4",
	price: 204,
	image: "red.png"
	},{
	id: 77,
	name: "red-triangle5",
	price: 205,
	image: "red.png"
	},{
	id: 78,
	name: "red-triangle6",
	price: 206,
	image: "red.png"
	},{
	id: 79,
	name: "red-triangle7",
	price: 207,
	image: "red.png"
	},{
	id: 80,
	name: "red-triangle8",
	price: 208,
	image: "red.png"
	},{
	id: 81,
	name: "red-triangle9",
	price: 209,
	image: "red.png"
	},{
	id: 82,
	name: "red-triangle10",
	price: 210,
	image: "red.png"
	},{
	id: 83,
	name: "red-triangle11",
	price: 211,
	image: "red.png"
	},{
	id: 84,
	name: "red-triangle12",
	price: 212,
	image: "red.png"
	},{	
	id: 85,
	name: "red-triangle13",
	price: 213,
	image: "red.png"
	},{
	id: 86,
	name: "red-triangle14",
	price: 214,
	image: "red.png"
	},{
	id: 87,
	name: "red-triangle15",
	price: 215,
	image: "red.png"
	},{
	id: 88,
	name: "red-triangle16",
	price: 216,
	image: "red.png"
	},{
	id: 89,
	name: "red-triangle17",
	price: 217,
	image: "red.png"
	},{
	id: 90,
	name: "red-triangle18",
	price: 218,
	image: "red.png"
	},{
	id: 91,
	name: "yellow-triangle1",
	price: 201,
	image: "yellow.png"
	},{
	id: 92,
	name: "yellow-triangle2",
	price: 202,
	image: "yellow.png"
	},{
	id: 93,
	name: "yellow-triangle3",
	price: 203,
	image: "yellow.png"
	},{
	id: 94,
	name: "yellow-triangle4",
	price: 204,
	image: "yellow.png"
	},{
	id: 95,
	name: "yellow-triangle5",
	price: 205,
	image: "yellow.png"
	},{
	id: 96,
	name: "yellow-triangle6",
	price: 206,
	image: "yellow.png"
	},{
	id: 97,
	name: "yellow-triangle7",
	price: 207,
	image: "yellow.png"
	},{
	id: 98,
	name: "yellow-triangle8",
	price: 208,
	immage: "yellow.png"
	},{
	id: 99,
	name: "yellow-triangle9",
	price: 209,
	image: "yellow.png"
	},{
	id: 100,
	name: "yellow-triangle10",
	price: 210,
	image: "yellow.png"
	},{
	id: 101,
	name: "yellow-triangle11",
	price: 211,
	image: "yellow.png"
	},{
	id: 102,
	name: "yellow-triangle12",
	price: 212,
	image: "yellow.png"
	},{	
	id: 103,
	name: "yellow-triangle13",
	price: 213,
	image: "yellow.png"
	},{
	id: 104,
	name: "yellow-triangle14",
	price: 214,
	image: "yellow.png"
	},{
	id: 105,
	name: "yellow-triangle15",
	price: 215,
	image: "yellow.png"
	},{
	id: 106,
	name: "yellow-triangle16",
	price: 216,
	image: "yellow.png"
	},{
	id: 107,
	name: "yellow-triangle15",
	price: 217,
	image: "yellow.png"
	},{
	id: 108,
	name: "yellow-triangle18",
	price: 218,
	image: "yellow.png"						
}]

function productie(productId){
	var itemElement = null;
	var container = document.getElementById("generic-container")
	var product = products.find(function (box) {
		return box.id == productId
	})

	if(product){
		itemElement = makeProduct(product)
		container.appendChild(itemElement)
		show("generic-container")
	} else {
		alert("no product");
	}

}

function makeProduct(product){
	var docFragment = document.createDocumentFragment();
	var div = document.createElement("div");
	var link = document.createElement("a");
	var image = document.createElement("img");
	var text = document.createElement("h1");
	var title1 = document.createTextNode(" " + product.name);
	var text2 = document.createElement("h4");
	var price1 = document.createTextNode(" " + product.price);


	
	image.src = product.image;
	image.classList.add("small");
	link.appendChild(image);
	link.appendChild(text);
	text.appendChild(title1);
	link.appendChild(text2);
	text2.appendChild(price1);

	docFragment.appendChild(link);

	return docFragment;
}

 

function show(what){
	document.getElementById('cajas').style.display = 'block';
	document.getElementById(what).style.display = 'block';
	document.getElementById('rosa').style.display = 'none';
	document.getElementById('verde').style.display = 'none';
	document.getElementById('azul').style.display = 'none';
	document.getElementById('marron').style.display = 'none';
	document.getElementById('triangles').style.display = 'none';
	document.getElementById('singup').style.display = 'none';
	document.getElementById('login').style.display = 'none';
}
