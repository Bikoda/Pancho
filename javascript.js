
function oppent(){
	$('#myModal').modal('show')
}
function makeCategory(form) {
	var category = form.elements.category.value;

	makeButton(category)

	$('#myModal').modal('hide')
	return true;
}
function oppent2(){

	    var ligh = document.getElementById("lightbox2"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        ligh.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    ligh.style.visibility = 'visible';
	    ligh.style.top = window.innerHeight/2 - 200 + 'px';
	    ligh.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;

}

var cats = ["random", "exploration", "science"];


 function makeButton(name){
	var cont = document.getElementById("category-container");
	var item = document.createElement('li');
	var link = document.createElement("a");
	var catname = document.createTextNode(name);

	link.appendChild(catname);
	item.appendChild(link);
	link.classList.add("btn", "button");
	link.setAttribute("onclick", "javascript:showCategory('" + name + "')");
	cont.appendChild(item);	
}

//var videos = ["https://www.youtube.com/embed/emXEYQg-E1I", "https://www.youtube.com/embed/7wwX12GnhwU"];
var videos = {
	"random": ["https://www.youtube.com/embed/emXEYQg-E1I", "https://www.youtube.com/embed/7wwX12GnhwU"],
	"science": ["https://www.youtube.com/embed/8CLRTa_ocmo", "https://www.youtube.com/embed/0_7QJ81roiA"],
	"exploration": ["https://www.youtube.com/embed/0yX1z5ecSWw", "https://www.youtube.com/embed/zZLgxLNerBU"],

}

function showCategory(category) {
	console.log(category);
	var container = document.getElementById("pluscat");	

	var content = ""

	for(var i = 0;i<videos[category].length;i++){
		console.log(videos[i]); 
		content+= "<div class='col-sm-3'><iframe width='100%' src='" + videos[category][i] + "' frameborder='0' allowfullscreen></iframe></div>"
	}

	container.innerHTML = content;

}

function makeButtons(){
     for(var i = 0;i<cats.length;i++){
		makeButton(cats[i]);
	}
}



function input1(form){
	var value = form.search.value;
	if (value == "Random"){
		option11();
	}
	else if (value == "random"){
		option11();
	}
	else if (value == "Exploration"){
		option22();
	}	
	else if (value == "exploration"){
		option22();
	}
	else if (value == "Science"){
		option33();
	}	
	else if (value == "science"){
		option33();	
	}	
	else {
		alert("not abailable");
	}
	return false;
}



// Init

makeButtons()
