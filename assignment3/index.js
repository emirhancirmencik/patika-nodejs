// object destructuring
const { circleArea, circleCircumference } = require("./circle");
const rad = 5;
// print values
console.log(`Area of radius ${rad} circle: `, circleArea(5));
console.log(`Circumference of radius ${rad} circle: `, circleCircumference(5));
