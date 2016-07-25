var videos = {
	"random": ["https://www.youtube.com/embed/emXEYQg-E1I", "https://www.youtube.com/embed/7wwX12GnhwU", "https://www.youtube.com/embed/HL0ivzoaQ9c", "https://www.youtube.com/embed/riYJmDyl1qI", "https://www.youtube.com/embed/PgLkQbXeZIE", "https://www.youtube.com/embed/LrelRFQisYY",
	"https://www.youtube.com/embed/ESVpxIzyMFc"],
	"science": ["https://www.youtube.com/embed/8CLRTa_ocmo", "https://www.youtube.com/embed/N5r9CJ_MJBc", "https://www.youtube.com/embed/xbuvcQrAOSk", "https://www.youtube.com/embed/Sl0BHueSjvA", "https://www.youtube.com/embed/hkh1fv5QgkM", "https://www.youtube.com/embed/E2Tb6o9j1oc", "https://www.youtube.com/embed/0_7QJ81roiA"],
	"exploration": ["https://www.youtube.com/embed/0yX1z5ecSWw", "https://www.youtube.com/embed/zZLgxLNerBU", "https://www.youtube.com/embed/eWwB25WktNE", "https://www.youtube.com/embed/0sEBVnuE4qQ", "https://www.youtube.com/embed/VweqwHIhEVQ", "https://www.youtube.com/embed/QP18xjmODU4", "https://www.youtube.com/embed/q5WNu22zg80"],
	
}

var cats = ["random", "exploration", "science"];

function oppent(){
	$('#myModal').modal('show')
}
function makeCategory(form) {
	var category = form.elements.category.value;
	var video = form.elements.video.value;
	videos[category] = videos[category] || [];

	if (!cats.includes(category)) {
		cats.push(category);
	}

	videos[category].push(video);
	makeButtons();

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


function showCategory(category) {
	var container = document.getElementById("pluscat");	

	var content="";


	for(var i = 0;i<videos[category].length;i++){
		content+= "<div class='col-sm-3'><iframe width='100%' src='" + videos[category][i] + "' frameborder='0' allowfullscreen></iframe></div>"
						
	}
	

	container.innerHTML = content;

}


function makeButtons(){
	document.getElementById("category-container").innerHTML = "";
     for(var i = 0;i<cats.length;i++){
		makeButton(cats[i]);
	}
}









// Init

makeButtons()
