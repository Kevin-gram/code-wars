
// Sure! Here are five questions that test your understanding of ES6 features related to objects:

// Question 1: Object Destructuring
// Given the following object:

// javascript
// Copy code
// const user = {
//     name: 'Alice',
//     age: 25,
//     address: {
//         city: 'Wonderland',
//         zip: '12345'
//     }
// 
// Write the code to extract the name, age, and city properties into separate variables using object destructuring.
const user = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};
const {name, age} =user;
const {city}=user.address
console.log(name, age, city);