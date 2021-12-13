// Function
const sum = (...num) => {
    let sum = 0;
    num.forEach((item) =>{
        sum += item;
    });
    console.log(sum);
};

// Array
const fruitItems = ["Apple", "Mango", "Orange", "Grapes", "Banana"];

// Object
const userDetails = {
    name: 'Rabin Bhat',
    email : 'testmailo7@gmail.com',
    phone : '9840047993',
    address : 'Nepal'
};

// Class
class Fruit {
    constructor(name, color, taste, price){
        this.name = name;
        this.color = color;
        this.taste = taste;
        this.price = price;
    }
};

// export{sum, fruitItems, userDetails, Fruit};
module.exports = {sum, fruitItems, userDetails, Fruit};