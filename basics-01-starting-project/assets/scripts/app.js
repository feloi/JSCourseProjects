const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function calculateResult(calculationType){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    let mathOperator;

    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = "+";
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = "-"
    }else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = "/";
    }else if(calculationType === 'MULTIPLY'){
        currentResult *= currentResult;
        mathOperator = "*";
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult('ADD')
}
function subtract(){
    calculateResult('SUBTRACT')
}
function divide(){
    calculateResult('DIVIDE')
}
function multiply(){
    calculateResult('MULTIPLY')
}
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


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

