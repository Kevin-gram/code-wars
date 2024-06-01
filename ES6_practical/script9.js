// Given an array of transactions where each transaction is an object with type ('income' or 'expense') and amount properties, write a function that calculates the total balance.
const transactions = [
    { type: 'income', amount: 100 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 80 }
  ];
  
  function calculateBalance(transactions) {
      
     let total =transactions.reduce((accum,item)=>item.amount+accum,0)
     return total
  }
  
  console.log(calculateBalance(transactions)); 