// step-1 : add click wvent handker with the submit button
document.getElementById('submit-id').addEventListener('click', function(){
    // step-2: get the email address inside the email input field 
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   // step-3: get the password  inside the email input field
   const passwordField = document.getElementById('user-password'); 
   const password = passwordField.value;
   
   
//   DANGER :  DO NOT VARIFY EMAI password on the client side 
// step-4 : varify emai && password

if(email === 'zahidhasan6999@gmail.com' && password  === 'tonuilu'){
 window.location.href = 'bank.html';
}else{
    alert('tui password vule gesos toke to ar taka dibo na');
}
})