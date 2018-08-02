/*
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

*/


		
/*
		
function addMultTable(row,column) {
	
			for (var j = 0; j <= row.length; j++){
				for (var i = 0; i < column.length; i++){
					
					console.log(i[j]);
				
					
    	}
	}
}
*/




 function addMultTable(array,array2) {
        var body = document.getElementsByTagName("body")[0];
        var table = document.createElement("table");
	 	var tableBody= document.createElement("tbody");
        for (var j = 0; j <= array2; j++) {
            var row = document.createElement("tr");
			
            for (var i = 0; i < array; i++) {
             var col = document.createElement("td");
				
                  var colText = document.createTextNode("col is row "+j+", column "+i); 

                col.appendChild(colText);
                row.appendChild(col);
            }

            tableBody.appendChild(row);
			  }
	 	table.appendChild(tableBody); 
	 
        body.appendChild(table);

    }
	addMultTable(4,8);