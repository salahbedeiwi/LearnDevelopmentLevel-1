document.getElementById("fName").innerHTML = "Alaa";
function getFirstName(){
	console.log("You clicked on getFirstName() ");
}
var lastName = getLastName();
document.getElementById("lName").innerHTML = lastName;
function getLastName(){
	return "Bedeiwi";
}
document.getElementById("age").innerHTML = getAge();
function getAge(){
	var year = 2020;
	var bornOn = 1989;
	var totalYears = year - bornOn;
	return totalYears;
}
/* reusable function */
var name0 = "Salah Bedeiwi";
document.getElementById("yourName0").innerHTML = returnName(name0);
document.getElementById("yourName1").innerHTML = returnName("Alaa");
document.getElementById("yourName2").innerHTML = returnName();
function returnName(name){
	if(name == undefined) { //if passed arguments/parameters 
							// is assigned and has "no value"
		return "<span class='boldText red'>No Name is provided</span>";
	}else {
		return "<span class='boldText green'>"+ name +"</span>";
	}
}
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
var text = "The temperature is " + toCelsius(77) + " Celsius";
document.getElementById("demo").innerHTML = text;
document.getElementById("demo1").innerHTML = toCelsius;
document.getElementById("demo1").innerHTML = function toX(x) {
  return (5/9) * (x-32);
};
var favFruit; /* global variable */
function getFruitName (){
	var favFruit = "Mango"; /*Local Variable*/
	return favFruit;
}
function getRandomNumber (){
	var num = 156;
	return num;
}
function carPrice(){
	return "$150,000";
}
function getFav (){
	var favFruit = "سفقش";
	return favFruit;
}

document.getElementById("favFruit").innerHTML = typeof getFruitName ();
document.getElementById("favFruit").innerHTML = getFav ();
document.getElementById("randNum").innerHTML = typeof getRandomNumber ();
var carName = "HONDA";
var carType = "Accord";
var carEngine = "v4";
var carColor = "grey";
var carSpeed = function carSpeed(){ return 150+"km/hr"; }
var id = 15;
// javascript object (properties/methods)
var car = {
	id : 1,
	carName : "HONDA", // this is property name carName has a value HONDA
	carType : "Accord",
	carColor : "Golden",
	carEngine : "V4",
	//call method
	carPrice : carPrice(), //Call global function - outside my object
	carSpeed : function(){
		
					return 150 + this.id; //local id = 1
				}, //Call local function - inside my object, returns string
	carOilChange : "Every Month",
	carFeatures : {
					carLight : "white",
					carTiresType : "jsjsj"
				}, //object inside an object
};
document.getElementById("carName").innerHTML = car.carName;
document.getElementById("carType").innerHTML = car.carType;
document.getElementById("carPrice").innerHTML = car.carPrice;
document.getElementById("carSpeed").innerHTML = car.carSpeed();
document.getElementById("carColor").innerHTML = car["carColor"];
document.getElementById("carOilChange").innerHTML = car.carOilChange;
document.getElementById("carFeatures").innerHTML = car["carFeatures"]["carLight"];
document.getElementById("age").addEventListener("click", function(){
	console.log("clicked");
});
function getTextVal(myText, showText){
	var txtInp = document.getElementById(myText);
	var inpVal = txtInp.value;//gets the value of the input 
	document.getElementById(showText).innerHTML = inpVal;
}
