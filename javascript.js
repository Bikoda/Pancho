var videos = {
	"random": ["emXEYQg-E1I", "7wwX12GnhwU", "HL0ivzoaQ9c", "riYJmDyl1qI", "PgLkQbXeZIE", "LrelRFQisYY", "ESVpxIzyMFc, ZE70DsyuXTE"],
	"science": ["8CLRTa_ocmo", "N5r9CJ_MJBc", "xbuvcQrAOSk", "Sl0BHueSjvA", "hkh1fv5QgkM", "E2Tb6o9j1oc", "0_7QJ81roiA"],
	"exploration": ["0yX1z5ecSWw", "zZLgxLNerBU", "eWwB25WktNE", "0sEBVnuE4qQ", "VweqwHIhEVQ", "QP18xjmODU4", "q5WNu22zg80"],
	
}

var cats = ["random", "exploration", "science"];

function oppent(){
	$('#myModal').modal('show')
}
function makeCategory(form) {	 

	var selected = form.elements.catOpts.selectedIndex
	var option = form.elements.catOpts[selected].text;
	var newCat = form.elements.category.value;
	var category = "";
	var video = form.elements.video.value;


	if (newCat == "") {
		category = option; 
	}  else {
		category = newCat;
	}

	videos[category] = videos[category] || [];

	if (!cats.includes(category)) {
		cats.push(category);
	}

	videos[category].push(video);
	makeButtons();
	makeOpt();

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
 function makeOpt(name){
	var sel = document.getElementById("selectOpt");
	var opt = document.createElement('option');
	var onm = document.createTextNode(name);

	opt.appendChild(onm);
	sel.appendChild(opt);		
}



function showCategory(category) {
	var container = document.getElementById("pluscat");	

	var content="";


	for(var i = 0;i<videos[category].length;i++){
		content+= "<div class='col-sm-3'><iframe width='100%' src='http://www.youtube.com/embed/" + videos[category][i] + "' frameborder='0' allowfullscreen></iframe></div>"

						
	}
	

	container.innerHTML = content;

}


function makeButtons(){
	document.getElementById("category-container").innerHTML = "";
	document.getElementById("selectOpt").innerHTML = "";
     for(var i = 0;i<cats.length;i++){
		makeButton(cats[i]);
		makeOpt(cats[i]);
	}
}

function discover() {
    window.open("https://www.youtube.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
function randomize() {
    window.open("http://randomyoutube.net/watch", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
function radios() {
    window.open("http://www.radioarg.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
function playlist() {
    window.open("https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=PLMC9KNkIncKtsacKpgMb0CVq43W80FKvo", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}







// Init

makeButtons()
