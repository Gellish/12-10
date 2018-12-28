let value1,value2,result;
//var setValues = () => or function setValues() //let or var or const // //
const setValues = () => {
	value1 = Number(document.querySelector("#Value1").value);
	value2 = Number(document.querySelector("#Value2").value);
}
const output = () => {
	const answer = document.querySelector("#answer").innerHTML = result;
}
const invalid = () => {
	const invalid = "invalid output";
	if (isNaN(result)) {
		alert("No letters allowed");
		document.querySelector("#answer").innerHTML = invalid;
} else {
	document.querySelector("#answer").style.color = "green";
}

}
const sum = () => {
	setValues();
	result = value1+value2;
	output();
	invalid();
} 
const minus = () => {
	setValues();
	result = value1-value2;
	output();
	invalid();
} 
const multiply = () => {
	setValues();
	result = value1*value2;
	output();
	invalid();
} 
const divide = () => {
	setValues();
	result = value1/value2;
	output();
	invalid();
}
