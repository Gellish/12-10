function level1() {
	var amount = Number(document.querySelector("#coffee").value);
	var output = document.querySelector("#answer");
	if (amount >= 25.00) {
		alert("ENJOY YOUR COFEE");
		output.innerHTML = "ENJOY YOUR COFEE";
		output.style.color = "green";
	}
	else if (isNaN(amount)) {
		let error = output.innerHTML = "No letters allow";
		output.style.color = "red";
		output.style.fontSize = "25px";
		alert(error);
	}
	else {
		output.innerHTML = "Insuffecient Amount";
		output.style.color = "orange";
	}
}
function level2() {
	var amount = document.querySelector("#coffee").value;
	var output = document.querySelector("#answer");
	if (amount >= 30.00) {
		alert("ENJOY YOUR COFEE");
		output.innerHTML = "ENJOY YOUR COFEE";
		output.style.color = "green";
	}
	else {
		output.innerHTML = "Insuffecient Amount";
		output.style.color = "red";
	}
}
function level3() {
	var amount = document.querySelector("#coffee").value;
	var output = document.querySelector("#answer");
	if (amount >= 50.00) {
		alert("ENJOY YOUR COFEE");
		output.innerHTML = "ENJOY YOUR COFEE";
		output.style.color = "green";
	}
	else {
		output.innerHTML = "Insuffecient Amount";
		output.style.color = "red";
	}
}