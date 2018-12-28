function amount() {
	var amount = document.querySelector("#grade").value;
	var output = document.querySelector("#answer");
	if (amount >= 99) {
		output.innerHTML = "AMOUNT ACCEPTED";
		output.style.color = "green";
	}
	else if (isNaN(amount)) {
		let error = output.innerHTML = "No letters allow";
		output.style.color = "red";
		alert(error);
	}
	else {
		output.innerHTML = "AMOUNT NOT ACCEPTED";
		output.style.color = "red";
	}
}