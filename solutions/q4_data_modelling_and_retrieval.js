// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruitArray = [
    { name: 'banana', color: 'yellow', price: 100 },
    { name: 'melon', color: 'red', price: 200 },
    { name: 'custard', color: 'green', price: 300 },
    { name: 'orange', color: 'orange', price: 400 },
];
const convertToobj = (fruitArray1, keyfield) =>
    fruitArray1.reduce((obj, item) =>
    {
        obj[item[keyfield]] = item;
        return obj;
    }, {});
const fruitobj = convertToobj(fruitArray, 'name');
console.log(fruitobj);

console.log(fruitobj.orange);
console.log(fruitobj.melon);