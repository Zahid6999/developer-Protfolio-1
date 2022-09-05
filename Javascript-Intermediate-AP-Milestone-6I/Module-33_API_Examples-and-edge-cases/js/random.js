const loadOfFun = () => {
    const url = 'https://randomuser.me/api/?results=10'
    fetch(url)
    .then(res => res.json())
    .then(data => displayFun(data))
};

const displayFun = dataIntry => {
    const dataIntryValue = dataIntry.results;
    const userContainer = document.getElementById('user-container');

    for(const value of dataIntryValue){
        // console.log(value);
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <h2>Gender: ${value.gender}</h2>
        <h3>Name:${value.id.name} ${value.id.value}</h3>
        <h4>FullName: ${value.name.first} - ${value.name.last}</h4>
        <h3>Email:${value.email} </h3>
        <h3>Location:${value.location.city} </h3>
        <h4>street: </h4>
      `;
      userContainer.appendChild(newDiv);
    }
}