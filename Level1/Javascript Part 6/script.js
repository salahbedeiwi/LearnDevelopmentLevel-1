"use strict";
var directions;
/* var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for(var x=0; x < cars.length; x++){
	console.log(cars[x]);
}
for(var x=1; x<=10; x++) {
	console.log(x);
}
var name = "salah,imad,salah,helal,bedeiwi";
var name_arr = name.split(','); //converts string to array
var myList = "<ul class='myStyle'>";
for(var x = 0; x <= name_arr.length-1; x++){
  myList += "<li>"+name_arr[x]+"</li>";
}
myList += "</ul>";
document.getElementById('demo').innerHTML = myList;

function getPerson(){
	"use strict";
	var person { propery: value, ....}
	for/in -> returns property
	var person = {"First Name":"John", "Last Name":"Doe", "Age":25};
	var x;
	var myList = "<ul class='myStyle'>";
	for(x in person) { 
		myList += "<li>" + x + ': <span class="bold">'+person[x]+"</span></li>";
	}
	myList += "</ul>";
	document.getElementById('demo').innerHTML = myList;
}
function students(){
	var students_arr = {
		"Students Name" : 
			{
				"Students 1":"Salah",
				"Students 2":"Alaa",
				"Students 3":"Ahmed"
			},
		"Students Age" : {"Students 1":31, "Students 2":25, "Students 3":22},
		"Students Grades" : {"Students 1":"65%", "Students 2":"99%", "Students 3":"85%"}
	};
	
	var x,y;
	var myList = "<ul class='myStyle'>";
	for(x in students_arr) { 
		for(y in students_arr[x]) {
			myList += "<li>" + x +' '+students_arr[x]+"</li>";
		} 
	}
	myList += "</ul>";
	document.getElementById('demo').innerHTML = myList;
} */
var names = ["salah", "Ali","Mohsin", "alaa",, "ahmed"];
var x;
var ele = document.getElementById('demo1');
var myList = "<ul class='myStyle'>";
for(x of names){
	if(x == null){
		myList += "";
	}else{
		myList += "<li>"+x+"</li>";
	}
}
myList += "</ul>";

document.getElementById('demo').innerHTML = myList;
directions = "East"; //initialize
try{
	if(directions == "east") throw "East";
	ele.innerHTML = directions;
	
}catch(e) {
	ele.innerHTML = e.message +'***'+e.name;
}
//self-invoke: automatically works when page is loading
(function abc(a,b,c=5,d){
	if(d == undefined) { d = 10;}
	var f = a+b+c+d;
	/* debugger; */
	document.getElementById('demo2').innerHTML = "Total is: "+f+". Num of args "+ arguments.length;
})(1,4);