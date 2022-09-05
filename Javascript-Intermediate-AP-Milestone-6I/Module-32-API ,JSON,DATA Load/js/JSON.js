const user = {name: 'zahid', id: 10, job: 'web-Developer'};

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);




const shop = {
    name: 'Kabila',
    address:{
        street: 'Dhanmondi-32',
        city: 'Dhaka', 
        country: 'BD'
    },
    products: ['laptop', 'mic', 'macBook', 'Ips', 'Potato'],
    isOn: true,
    isNew: false
};
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(typeof shopJSON);

const shopConvartObj  = JSON.parse(shopJSON);
console.log(typeof shopConvartObj);