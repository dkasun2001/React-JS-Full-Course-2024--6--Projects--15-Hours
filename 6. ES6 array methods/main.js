//map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [
  {
    name: "Person 1",
    age: 45,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 3",
    age: 40,
    country: "RUSSIA",
  },
  {
    name: "Person 4",
    age: 50,
    country: "INDIA",
  },
];

//--------------------- map

let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return `${singlePerson.name} and age is ${singlePerson.age}`;
});
console.log(getAllNames);

//--------------------- find

let getPersonsFromUSA = personsArray.find((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getPersonsFromUSA);

//--------------------- filter

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getAllPersonsFromUSA);
console.log(getAllPersonsFromUSA[1].age); // 30

//--------------------- some

// Determines whether the specified callback function returns true for "any" element of an array.

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
  return singlePerson.age > 40;
});
console.log(checkSomeArrayMethodWithExample); // true

//--------------------- every

//Determines whether "all" the members of an array satisfy the specified test.

let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
  return singlePerson.age > 40;
});
console.log(checkEveryArrayMethodWithExample); // false

//--------------------- includes, indexOf

const fruitsArray = ["apple", "banana", "orange"];

console.log(fruitsArray.includes("apple")); // true
console.log(fruitsArray.indexOf("apple")); // 0

console.log(fruitsArray.includes("sangam"), fruitsArray.indexOf("sangam")); // false -1

//--------------------- findIndex

let getIndexOfPersonWhoISFromRussia = personsArray.findIndex((singlePerson) => {
  return singlePerson.country === "RUSSIA";
});

console.log(getIndexOfPersonWhoISFromRussia); //2
