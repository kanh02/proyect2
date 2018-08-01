
var bands=["green day","u2","lz"];
var cats = ["Garfield","Silvestre","Tom","Adonis"];

function addBands(array){
	var ul = document.getElementById("band-list")
	console.log(ul)
	for( var i=0; i < array.length; i++){
		
	var li= document.createElement("li");
	li.textContent = array[i];
	ul.appendChild(li);	
	}
}

addBands(bands);
addBands(cats);	

