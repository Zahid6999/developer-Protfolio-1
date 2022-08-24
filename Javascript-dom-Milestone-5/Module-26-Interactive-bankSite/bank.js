document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
   const newDepositValueString =  depositField.value;
   const newDepositAmount = parseFloat(newDepositValueString);
//    console.log(typeof newDepositAmount);

 const depositTotalAmount = document.getElementById('deposit-total');
 const previousdDepositTotalString = depositTotalAmount.innerText;
 const previousDepositTotal = parseFloat(previousdDepositTotalString);
 const currentDepositTotal = previousDepositTotal + newDepositAmount;

 
 depositTotalAmount.innerText = currentDepositTotal;


//  step 5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
 balanceTotalElement.innerText = currentBalanceTotal;
// clear the deposit field ------
 depositField.value = '';
})



// -----------withdrow field  area-----------
/* step -1 */
document.getElementById('withdraw-btn').addEventListener('click', function (){
    // step -2
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawTotal = parseFloat(newWithdrawAmountString);

//  step -3
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//   step -4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;

//   step -5 
withdrawTotalElement.innerText = currentWithdrawTotal;

// step -6 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step -7 
const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;
balanceTotalElement.innerText = currentBalanceTotal;

// clear the deposit field ------
withdrawField.value = '';
})
