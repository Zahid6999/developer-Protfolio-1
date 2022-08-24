
// --------------------------DEPOSIT AREA START---------------------------
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositFiled = document.getElementById('deposit-field');
    const newDepositValueString = depositFiled.value;
    const newDepositValue = parseFloat(newDepositValueString);
    depositFiled.value = '';

// deposit card ============= step- 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // ======step -5 calculate==========
    const newDepositTotal = previousDepositTotal + newDepositValue;
    depositTotalElement.innerText = newDepositTotal;
     
    // Step-6
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    
    const totalBalance = previousBalanceTotalAmount + newDepositTotal
    balanceTotal.innerText = totalBalance;
})


// --------------------------DEPOSIT AREA END---------------------------


// --------------------------WITHDRAW AREA START---------------------------


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);
    withdrawField.value = '';


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // calculate area-----------
    const newWithdrawBalanceTotal = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawBalanceTotal;

    // Balance area 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const totalBalanceAll = parseFloat(balanceTotalString);


    const totalBalance = totalBalanceAll - newWithdrawBalanceTotal;
    balanceTotal.innerText = totalBalance;

})

