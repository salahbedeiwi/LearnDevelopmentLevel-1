function congrats(current, results){
	var showMyResults = document.getElementById(results);
	if(current.value >= 16 && current.value <= 32) {
		showMyResults.innerHTML = "Good to go 16-32";
	}
	else if(current.value <= 0){
		showMyResults.innerHTML = "Value must be > 0";
	}
	else {
		showMyResults.innerHTML = "Sorry";
	}
}
function checkDate(current){
	var d = new Date();
	var currentYear = current.value.split('-')[0];
	var showMyResults = document.getElementById("test2");
	if(currentYear > d.getFullYear() || currentYear == 2018 ){
		showMyResults.innerHTML = "Sorry, your can't see this now";
	}else{
		showMyResults.innerHTML = "Ok, your can see this now";
	}
}