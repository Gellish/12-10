
function gradescale() {
	var grade = document.querySelector("#grade").value;
	var output = document.querySelector("#answer");
	if (grade > 89) {
		output.innerHTML = "You Got an 'A'. Excellent!";
		if (grade >= 90 && grade <= 94) {
			output.style.color = "green";
		}
		else if (grade >= 95 && grade <=98 ) {
			output.style.color = "red";
		}
		else {
			output.style.color = "gold";
		}
	}
	else if (grade >= 80 && grade <= 90) {
		output.innerHTML = "You Got a 'B'. Great!";
		if (grade >= 80 && grade <= 84) {
			output.style.color = "green";
		}
		else if (grade >= 85 && grade <=88 ) {
			output.style.color = "red";
		}
		else {
			output.style.color = "gold";
		}
	}
	else if (grade >= 70 && grade <= 80) {
		output.innerHTML = "You Got a 'C'. Aim Higher!";
		if (grade >= 70 && grade <= 74) {
			output.style.color = "red";
		}
		else if (grade >= 75 && grade <=78 ) {
			output.style.color = "orange";
		}
		else {
			output.style.color = "darkred";
		}
	}
	else if (grade >= 60 && grade <= 70) {
		output.innerHTML = "You Got a 'D'. You need to study!";
		if (grade >= 60 && grade <= 64) {
			output.style.color = "red";
		}
		else if (grade >= 65 && grade <=68 ) {
			output.style.color = "orange";
		}
		else {
			output.style.color = "darkred";
		}
	}
	else if (grade >= 50) {
		output.innerHTML = "You got an 'F'. You have failed your class!";
		if (grade >= 50 && grade <= 54) {
			output.style.color = "red";
		}
		else if (grade >= 55 && grade <=58 ) {
			output.style.color = "orange";
		}
		else {
			output.style.color = "darkred";
		}
	}
	else if (grade < 50) {
		alert("invalid Grading System")
		document.getElementById("answer").innerHTML = "invalid grading system"
	}
	else if (isNaN(output)) {
		alert("No letters allowed");
		document.getElementById("answer").innerHTML = "invalid No letters allowed";
}
	else {
		
	}
}
