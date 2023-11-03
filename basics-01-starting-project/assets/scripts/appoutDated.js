const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);

}

function writeToLog(operatorIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
    operation: operatorIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
};
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult);

}

function subtract(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

}
function multiply(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}
function divide(num1, num2){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);

}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

