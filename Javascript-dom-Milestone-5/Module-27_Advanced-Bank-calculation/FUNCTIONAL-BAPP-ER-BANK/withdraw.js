// step - 1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the withdraw btn and input field value show in function
    const newWithdrawAmount = getInputFieldValueById('withdraw-field')
    // get the withdraw element and innertext show in function

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotalId = getTextElementValueById('balance-total', )
    const previousBalanceTotal = previousBalanceTotalId - newWithdrawAmount;

    setTextElementValueById('balance-total', previousBalanceTotal)
    

})