const loadFun = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayFun(data))
};

const displayFun = (country) => {
//     for(const cName of data){
//     console.log(cName.name);
// }
const countryContainer = document.getElementById('country-container');
country.forEach(cName => {
    // console.log(cName);
    const createDiv = document.createElement('div');
    createDiv.classList.add('single-country')
    createDiv.innerHTML = `
     <h3>Country-Name: ${cName.name.common} </h3>
     <h4>Capital:${cName.capital ? cName.capital[0] : 'Capital nai soto desh'} </h4>
     <button onclick="loadcountryDetail('${cName.cca2}')">More details</button>
    `;
    countryContainer.appendChild(createDiv);
});
}

const loadcountryDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`
//   console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayCountry(data[0]))
};

const displayCountry = (countryDtls) => {
    console.log(countryDtls);
   const countryDetals = document.getElementById('country-detals')
   countryDetals.innerHTML = `
     <h3>Capital: ${countryDtls.capital[0]}</h3>
     <img src="${countryDtls.flags.png}">
   `;
}
loadFun()