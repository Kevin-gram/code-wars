// Given an array of objects representing products, each with a name and price property, write a function that returns the name of the most expensive product.
const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 },
    { name: 'Monitor', price: 300 }
  ];
  
  function getMostExpensiveProduct(products) {
   const expensive=products.sort((a,b)=>b.price-a.price)
  //  let expensiveProduct=expensive.find()
   return expensive[0].name
  }
  
  console.log(getMostExpensiveProduct(products)); // Output: 'Laptop'
  