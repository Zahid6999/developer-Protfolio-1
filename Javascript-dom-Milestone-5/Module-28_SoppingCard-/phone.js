 function  iPhoneBtnNumber(IntegerNum){
    const btnNumberField = document.getElementById('btn-number-field');
   const btnNumberString = btnNumberField.value;
   const PreviousBtnNumber = parseInt(btnNumberString);
   let newPhoneNumber;
   
   if(IntegerNum === true){
    newPhoneNumber = PreviousBtnNumber + 1;
   }else{
    newPhoneNumber = PreviousBtnNumber - 1;
   }

   btnNumberField.value = newPhoneNumber;
   return newPhoneNumber;
 }


 function upDateTotalPrice(newPhoneNumber){
    const singerPhonePrrice = newPhoneNumber * 1219;
   const phoneTotalPrice = document.getElementById('phone-total-price');
   phoneTotalPrice.innerText = singerPhonePrrice;
 }

 function getTextElementValueById(element){
    const phoneTotalElement = document.getElementById(element);
    const phoneTotalElementToString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementToString);
    return currentPhoneTotal;

 }

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = iPhoneBtnNumber(true);
   upDateTotalPrice(newPhoneNumber);

   const currentPhoneTotal = getTextElementValueById('phone-total-price');
   const currenCaseTotal = getTextElementValueById('case-total')
   
   const currentSubTotal = currentPhoneTotal + currenCaseTotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = iPhoneBtnNumber(false) ;
   upDateTotalPrice(newPhoneNumber);
})

