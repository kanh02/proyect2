/*console.log("Starting javascript ...")


var myName ="Oscar";
console.log("Oscar");

var edad = 31;
console.log(31);

var iAge = 32;
var ageDif = 0;
console.log(edad - iAge);



if (edad == 21){
console.log ("tiene 21 años");}
else if (edad > 21){
console.log("tiene mas de 21 años");}


var names =["alberto","esneider","oscar","mica","raul"];
console.log(names.length);
console.log(names[0]);
console.log(names[4]);
console.log(names[0+1]);

var ages =[24,28,29,31,33];


function printVariables(array){
	for( var i = 0; i < array.length; i++){
//		console.log(array.length);
		console.log(array[i]);
}
}

printVariables(names);
printVariables(ages);


i=0;
while  (i < ages.length) { if (ages[i]%2==0){console.log(ages[i]);}
		i++;   }


	
var ages = [24, 28, 29, 31, 33];

ages.sort(function(a, b){return b - a});
console.log(ages[0]);





var ages = [24, 28, 29, 31, 33];
function ages(){
	ages.sort(function(a, b){return a - b });
	console.log(ages[0]);
}




var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;


function compare(a, b){
	if (array < index){return -1;}
	if (array > index){return 1;}
	};
console.log(array[1]);





var emptyArray=[];


function find(par1,par2){
	for (i=0; i < par1.length; i++){
			for (j=i+1; j < par1.length; j++){
				if(par1[i] === par1[j]){
					par2.push(par1[i]);
					console.log(par2);
				}
			}
	}
}

find(array,emptyArray);
		





myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(" "));




function reversed(){
	var x = '32443';
	var k = x.split('');
	var reversedArr = []
	for(var i = k.length; i >= 0; i--){
		 reversedArr.push(k[i])}
		var reversedStr = reversedArr.join('')
		console.log(reversedStr)
}

reversed();




var str = 'webmaster';
ordenalfabetico(str); 

function ordenalfabetico(String){
	var strReverse = String.split('').sort().join(''); console.log(strReverse); 
}

var st = "Principe of Persia.";
strToLower(st);

function strToLower(String){
    var stu = String.toUpperCase();
	console.log(stu)
}



 function findlongest(str){
    var words = str.split(' ');
    var longest = words[0];
    
    for (var i = 0; i < words.length; i++){
      if(words[i].length > longest.length) {
        longest = words[i];
      }
    }
    
    return console.log(longest);
 } 
 findlongest('Web Development Tutorial');


*/


/*JavaScript Exercises 2
Exercise 1
Now let's add content to an HTML document instead of writing to the console.
Write a function called addBands(myBandList) that will list your favorite bands.
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create list items and add them
to the unordered list, with one list item for each string in array myBandList.
For example, if I call:
  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
The function will add three list items to the unordered list.
Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.
For example, if I call:
    addMultTable(4, 8);
It will create an HTML table with 4 rows
and 8 columns, and append it after the level 1 heading.