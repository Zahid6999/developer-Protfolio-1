
// step- 2
function getInputFieldValueById(inputId){
    const getInput = document.getElementById(inputId);
    const getInputFieldValueString = getInput.value;
    const getFinalValue = parseFloat(getInputFieldValueString);
    getInput.value = '';
    return getFinalValue;
}


// step-3
function getTextElementValueById(elementId){
    const getText = document.getElementById(elementId);
    const getTextValueString = getText.innerText;
    const  getFinalText = parseFloat(getTextValueString);
    return getFinalText;
}

// step-4
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// step -1
document.getElementById('deposit-btn').addEventListener('click', function(){
    

    const getInpuFieldResult = getInputFieldValueById('deposit-field');
    const getTextElementResult = getTextElementValueById('deposit-total');
   
    // step set calculate new deposit total 
    const newDepositTotal = getTextElementResult + getInpuFieldResult;
// set deposit total value
     setTextElementValueById('deposit-total', newDepositTotal);


// get previous balance by using the function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositTotal;
setTextElementValueById('balance-total', newBalanceTotal);
})

