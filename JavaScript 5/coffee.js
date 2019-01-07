fuction accept_input() {
  	var input = Number(document.querySelector("#coffee").value);
	  return input;
}
 fuction checkamount(amount,price) {
  	if (isNaN(amount)) {
		let error = output.innerHTML = "No letters allow";
		output.style.color = "red";
		output.style.fontSize = "25px";
		alert(error);
	}
  else if (amount >= price) {
		alert("ENJOY YOUR COFEE");
		output.innerHTML = "ENJOY YOUR COFEE";
		output.style.color = "green";
	}

	else {
		output.innerHTML = "Insuffecient Amount";
		output.style.color = "orange";
	}
} 

function level1() {
  var input = accept_input()
  var cprice = 25;
  checkamount(input,price)
  }

function level2() {
  var input = accept_input()
  var price = 30;
  checkamount(input,price)
}

function level3() {
 var input = accept_input()
 var cprice = 50;
 checkamount(input,price)
}

