// ===step-2
function getCasePlusInputFieldById(inputId){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldToString = caseInputField.value;
    const caseFinalInputValue = parseInt(caseInputFieldToString);

    let newCaseNuber ;
    if(inputId === true){
        newCaseNuber = caseFinalInputValue + 1;
    }
    else{
        newCaseNuber = caseFinalInputValue - 1;
    }
    caseInputField.value = newCaseNuber;
    return newCaseNuber;
}

// ===step-1
document.getElementById('btn-case-plus').addEventListener('click', function(){
    // ===step3
    const getCaseInputFieldValue = getCasePlusInputFieldById(true);
    const newTotalPrice = getCaseInputFieldValue * 69;
    const caseAmountId = document.getElementById('case-total');
    caseAmountId.innerText = newTotalPrice;

    
})


// ===minus btn addEventListener
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const minusInputFieldResult = getCasePlusInputFieldById(false);

    const  newTotalPrice  = minusInputFieldResult * 69;
    const caseMinusId = document.getElementById('case-total');
    caseMinusId.innerText = newTotalPrice;
    
})

















// ===step-4 minus function
// function getCaseMinusInputFieldById(inputMinusId){
//     const caseMinusInputField = document.getElementById(inputMinusId);
//     const caseMinusInputFieldString = caseMinusInputField.value;
//     const caseMinusInputValue = parseInt(caseMinusInputFieldString);
//     const newCaseMinusNumber = caseMinusInputValue - 1;
//     caseMinusInputField.value = newCaseMinusNumber;
//     return caseMinusInputValue;

// }