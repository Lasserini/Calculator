// EventListeners
const numBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const calculateBtn = document.querySelector('[data-calculate]');
const deleteBtn = document.querySelector('[data-delete]');
var numInputs = 0;
var inputs = [];

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
        inputs.push(parseInt(numInputs));
        numInputs = 0;
        oldInput = document.getElementById("results").innerText;
        let updatedInput = oldInput + button.innerText;
        document.getElementById("results").innerHTML = updatedInput;
        inputs.push(button.innerHTML);
    })
})

deleteBtn.addEventListener('click', () => {
    document.getElementById("results").innerHTML = "";
    numInputs = 0;
    inputs = [];
})

calculateBtn.addEventListener('click', () => {
    inputs.push(parseInt(numInputs));
    numInputs = 0;
    document.getElementById("results").innerHTML = inputs;
    inputs = [];
})