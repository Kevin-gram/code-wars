// Question 3: Dynamic Property Names
// You want to create an object with dynamic property names. Given the following variables:

// javascript
// Copy code
// const propName = 'status';
// const propValue = 'active';
// Write the code to create an object named userStatus that has a property whose name is the value of propName and whose value is propValue.
const propName = 'status';
const propValue = 'active';
const userStatus={propName,propValue}
console.log(userStatus)