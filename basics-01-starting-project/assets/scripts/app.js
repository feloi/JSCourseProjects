const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);

}

function add(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
}
function multiply(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
}
function divide(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

