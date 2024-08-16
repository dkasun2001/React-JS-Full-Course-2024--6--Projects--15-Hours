const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  //   id: id,
  //   productName: productName,
  //   rating: rating,
  id,
  productName,
  rating,
};

console.log(product);

const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;
// console.log(getProductTwoDescription);

const { description } = product2;
console.log(description);

const array = [1, 2, 3];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue, getArraySecondValue);

const [ArrayFirstValue, ArraySecondValue, ArrayThirdValue] = array;
console.log(ArrayFirstValue, ArraySecondValue,ArrayThirdValue);
