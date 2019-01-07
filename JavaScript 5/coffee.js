    function accept_input(){
        var input = Number(document.querySelector("#coffee").value);
        return input;
    }

    function condition(amount,price) {
        var output = document.querySelector("#answer");
        var balance = document.querySelector("#balance");
        if (isNaN(amount)) {
            var error = output.innerHTML = "No letters allow";
            output.style.color = "red";
            alert(error);
        }
        else if (amount >= price) {
            alert("ENJOY YOUR COFEE");
            output.innerHTML = "ENJOY YOUR COFEE";
            output.style.color = "green";
            var result = amount-price;
            balance.innerHTML = result;
            balance.style.color = "green";
        }
        else {
            output.innerHTML = "Insuffecient Amount";
            balance.innerHTML = "0";
            balance.style.color = "orange";
            output.style.color = "orange";
        }
    }

    function level1() {
        var input = accept_input();
        var price = 25;
        condition(input,price);
    }
    function level2() {
        var input = accept_input();
        var price = 30;
        condition(input,price);
    }
    function level3() {
        var input = accept_input();
        var price = 50;
        condition(input,price);
    } 
