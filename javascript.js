function option11(){
	document.getElementById('random').style.display = 'block';	
	document.getElementById('exploration').style.display = 'none';
	document.getElementById('science').style.display = 'none';
	document.getElementById('pluscat').style.display = 'none';
}
function option22(){
	document.getElementById('random').style.display = 'none';	
	document.getElementById('exploration').style.display = 'block';
	document.getElementById('science').style.display = 'none';
	document.getElementById('pluscat').style.display = 'none';
}
function option33(){
	document.getElementById('random').style.display = 'none';	
	document.getElementById('exploration').style.display = 'none';
	document.getElementById('science').style.display = 'block';
	document.getElementById('pluscat').style.display = 'none';
}
function option44(){
	document.getElementById('random').style.display = 'none';	
	document.getElementById('exploration').style.display = 'none';
	document.getElementById('science').style.display = 'none';
	document.getElementById('pluscat').style.display = 'block';
}

function oppent(){

	    var lightbox = document.getElementById("lightbox"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        lightbox.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    lightbox.style.visibility = 'visible';
	    lightbox.style.top = window.innerHeight/2 - 200 + 'px';
	    lightbox.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;
}
function oppent1(){

	    var lightbox1 = document.getElementById("lightbox1"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        lightbox1.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    lightbox1.style.visibility = 'visible';
	    lightbox1.style.top = window.innerHeight/2 - 200 + 'px';
	    lightbox1.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;
}
function oppent2(){

	    var lightbox2 = document.getElementById("lightbox2"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        lightbox2.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    lightbox2.style.visibility = 'visible';
	    lightbox2.style.top = window.innerHeight/2 - 200 + 'px';
	    lightbox2.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;
}
function oppent3(){

	    var lightbox3 = document.getElementById("lightbox3"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        lightbox3.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    lightbox3.style.visibility = 'visible';
	    lightbox3.style.top = window.innerHeight/2 - 200 + 'px';
	    lightbox3.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;
}
function oppent4(){

	    var lightbox4 = document.getElementById("lightbox4"),
	        dimmer = document.createElement("div");

	    dimmer.style.width =  window.innerWidth + 'px';
	    dimmer.style.height = window.innerHeight + 'px';
	    dimmer.className = 'dimmer';

	    dimmer.onclick = function(){
	        document.body.removeChild(this);   
	        lightbox4.style.visibility = 'hidden';
	    }

	    document.body.appendChild(dimmer);

	    lightbox4.style.visibility = 'visible';
	    lightbox4.style.top = window.innerHeight/2 - 200 + 'px';
	    lightbox4.style.left = window.innerWidth/2 - 500 + 'px';
	    return false;
}



var cats = [];

function myFunction(name){
     var x = document.getElementById("box");
     cats.push(document.getElementById("input").value);

     function makebuttons(name){
	 var cont = document.getElementById("category-container");
	 var item = document.createElement('li');
	 var link = document.createElement("a");
	 var catname = document.createTextNode(name);
	



	
	 link.appendChild(catname);
	 item.appendChild(link);
	 link.classList.add("btn", "button");
	 link.setAttribute("onclick", "javascript:option44()");
	 cont.appendChild(item);	
}

     for(var i = 0;i<cats.length;i++){
		if (i>=10){break;}
		makebuttons(cats[i]);		

	}
}






