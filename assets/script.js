// EventListeners
const numBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const calculateBtn = document.querySelector('[data-calculate]');
const deleteBtn = document.querySelector('[data-delete]');
var numInputs = 0;
var Inputs = [];

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        numInputs = numInputs + button.innerText;
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        Inputs.push(parseInt(numInputs));
        numInputs = 0;
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        Inputs.push(button.innerHTML);
    })
})

deleteBtn.addEventListener('click', () => {
    document.getElementById("results").innerHTML = "";
    numInputs = 0;
    Inputs = [];
})

calculateBtn.addEventListener('click', () => {
    Inputs.push(parseInt(numInputs));
    numInputs = 0;

    document.getElementById("results").innerHTML = result;
    Inputs = [];
})