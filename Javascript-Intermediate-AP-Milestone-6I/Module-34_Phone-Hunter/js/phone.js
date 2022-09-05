const loadPhoneHunter = (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(url)
    .then(res => res.json())
    .then(phoneData => displayPhoneHunter(phoneData.data))
}

/* second Function */
const displayPhoneHunter = (phoneData) => {
    const phoneContainer = document.getElementById('phone-container');
   phoneContainer.innerHTML = ``;
   /* display show  20  phone*/
   const showAll = document.getElementById('show-all');
   if(phoneData.length > 10){
      phoneData = phoneData.slice(0, 20);
      showAll.classList.remove('d-none');

   }else{
      showAll.classList.add('d-none');
   }
//    display no phone found
 const noPhone = document.getElementById('no-found-message');
 if(noPhone.length === 0){
    noPhone.classList.remove('d-none');
 }
 else{
    noPhone.classList.add('d-none');
 }

 
   phoneData.forEach(singlePhone => {
    //    console.log(singlePhone);  
    const createDiv = document.createElement('div');
    createDiv.classList.add('col')
    createDiv.innerHTML = `
     <div class="card p-4">
        <img src="${singlePhone.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h4 class="card-title">Phone Brand: ${singlePhone.brand}</h4>
        <h5 class="card-title">Phone Name: ${singlePhone.phone_name}</h5>
       
        </div>
    </div>
    `;
    phoneContainer.appendChild(createDiv);
   });
}
// stop loader


// search handlayer
const searchBtn = document.getElementById('search-btn').addEventListener('click', function(){
   // start loader
   toggleSpinner(true)
    const searchField = document.getElementById('search-field');
   const searchValue = searchField.value;
   searchField.value = ''
   loadPhoneHunter(searchValue);
})

const toggleSpinner = isLoading => {
   const loaderSection = document.getElementById('loader');
   if(isLoading){
      loaderSection.classList.remove('d-none');
   }
   else{
      loaderSection.classList.add('d-none')
   }
}
// loadPhoneHunter('phone');