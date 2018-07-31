console.log("Starting javascript ...")


var myName ="Oscar";
console.log("Oscar");
var edad = 31;
console.log(31);
var ignasiAge = 32;
var ageDiff = 0;
console.log(edad - ignasiAge);



if (edad == 21){
console.log ("tiene 21 años");}
else if (edad > 21){
console.log("tiene mas de 21 años");}


	var names =["alberto","esneider","oscar","mica","raul"];
	console.log(names.length);
	console.log(names[0]);
	console.log(names[4]);
	console.log(names[0+1]);




for( var i = 0; i < names.length; i++){
	console.log(names[i]);
}



var ages =[24,28,29,31,33];
console.log(ages.length);
for (var i = 0; i < ages.length; i++){
	console.log(ages[i]);
}



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






var array2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function find(){
	var array2=[];
	for (i=0; i < array.length; i++){
			for (j=i+1; j < array.length; j++){
				if(array[i] === array[j]){
					array2.push(array[i])
					console.log(array2);
				}
			}
	}
}

find(array2);
		





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