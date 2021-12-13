// import {sum, fruitItems, userDetails, Fruit} from "./modules";

const { sum, fruitItems, userDetails, Fruit } = require("./modules");

sum(1, 2, 3, 4, 5);

console.log(fruitItems);

console.log(userDetails);

const apple = new Fruit("Apple", "Red", "Sweet & Sour", 200);

console.log(apple);

console.log(
  `${userDetails.name} likes ${apple.name} because it is ${apple.taste}.`
);
