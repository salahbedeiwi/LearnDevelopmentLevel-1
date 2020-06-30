/* 
	Declare variable name called first_name 
		and assigned a value "Salah" to it.
*/
/* Declare global variables/identifier */
var first_name = "Salah",
	last_name,
	age,
	school;
	
last_name = "Bedeiwi";
age = 31, 
school = "UMN";

if(school == undefined) {
	console.log("You have un defined variable");
}

document.getElementById("fName").innerHTML = first_name;
document.getElementById("lName").innerHTML = last_name;
document.getElementById("age").innerHTML = age;
