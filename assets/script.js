// EventListeners
const numBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const calculateBtn = document.querySelector('[data-calculate]');
const deleteBtn = document.querySelector('[data-delete]');
var numInputs = 0;
var inputs ="";

// Number button click function
numBtn.forEach(button => {
    button.addEventListener('click', () => {
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        inputs = inputs + button.innerText;
    })
})

// Operator button click function
operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        inputs = inputs + button.innerText;
    })
})

// Delete button click function
deleteBtn.addEventListener('click', () => {
    document.getElementById("results").innerHTML = "";
    inputs = "";
})

// Calculate button click function
calculateBtn.addEventListener('click', () => {
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
    inputs = result;
    // Catching devide by zero
    if (result == Infinity) {
        result = "Can't divide by 0!";
        inputs = "";
    }
    document.getElementById("results").innerHTML = result;
})

// History display functionality
history_btn.addEventListener('click', ()=>{
    document.getElementById("history_list").style.display = "block";
})
