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


