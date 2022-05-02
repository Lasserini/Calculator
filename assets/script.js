// EventListeners
const numBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const calculateBtn = document.querySelector('[data-calculate]');
const deleteBtn = document.querySelector('[data-delete]');
var numInputs = 0;
var inputs ="";

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        //numInputs = numInputs + button.innerText;
        inputs = inputs + button.innerText;
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        // inputs.push(numInputs);
        // numInputs = 0;
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        // inputs.push(button.innerHTML);
        inputs = inputs + button.innerText;
    })
})

deleteBtn.addEventListener('click', () => {
    document.getElementById("results").innerHTML = "";
    // numInputs = 0;
    inputs = "";
})

calculateBtn.addEventListener('click', () => {
    // inputs.push(numInputs);
    // numInputs = 0;
    calculation = inputs.match(/\d+|[^0-9]/g);
    for (var a = 0; a < calculation.length; a++) {
        if (a == 0) {
          result = parseInt(calculation[a]);
        } else {
          if (!isNaN(calculation[a])) {
            switch (calculation[a - 1]) {
              case "-":
                result -= parseInt(calculation[a]);
                break;
              case "+":
                result += parseInt(calculation[a]);
                break;
              case "*":
                result *= parseInt(calculation[a]);
                break;
              case "/":
                result /= parseInt(calculation[a]);
                break;
            }
          }
        }
    }
    console.log(result);
    document.getElementById("results").innerHTML = result;
    inputs = [];
})