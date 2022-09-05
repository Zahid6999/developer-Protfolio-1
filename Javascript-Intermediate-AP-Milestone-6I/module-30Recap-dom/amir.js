function products(productWeight, productPrice){
    const totalPrice = (productWeight * productPrice) / 1000;

   return totalPrice;
}

const productTotal = products(100, 500); 
console.log(productTotal);