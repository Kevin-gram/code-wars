// Given an array of objects representing users, each with a name and age property, write a function that returns an array of names of users who are at least 18 years old.
const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 15 }
  ];
  
  function getAdultUserNames(users) {
   const aboveAverage=users.filter(user=>user.age>=18)
   const adultNames=aboveAverage.map(user=>user.name)
   return adultNames
  }
  
  console.log(getAdultUserNames(users)); // Output: ['Bob', 'Charlie']
  