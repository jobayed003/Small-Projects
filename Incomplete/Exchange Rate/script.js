"use strict";

const API_KEY = "3198e08a3fb3507bb9543d8f29c96641";

const req = async () => {
  const res = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=USD`
  );

  const data = await res.json();
  // console.log(data);
};

// req();

// Question 1
/*
const array = [
  { x: "foo", y: 8 },
  { x: "bar", y: 3 },
  { x: "baz", y: 7 },
];

const foo = array.reduce(
  (acc, el) => ({
    ...acc,
    [el.x]: el.y,
  }),
  {}
);
console.log(foo);

*/

// Question 2

/*
const arr = [{ name: "foo" }, { name: "bar" }, { name: "baz" }];

const array2 = new Array(arr.length).fill({});

array2.forEach((obj, i) => {
  obj.name = arr[i].name;
  obj.position = i;
});

const array3 = arr.map((obj, i) => ({
  ...obj,
  position: i,
}));

const array4 = arr.slice();

array4.forEach((obj, i) => {
  obj.position = i;
});

console.log(arr);
console.log(array2);
console.log(array3);
console.log(array4);
*/

// Question 3

/* 
const fooObj = { name: "foo" };
const barObj = { name: "bar" };

const getFoo = () => Promise.resolve(fooObj);
const getBar = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(barObj);
    }, 2000);
  });

Promise.all([getFoo(), getBar()])
  .then((foo, bar) => {
    console.log(fooObj, barObj);
    console.log(foo, bar);

    foo.isAnAlgoExpert = foo.name.includes("AlgoExpert");
    bar.isAnAlgoExpert = bar.name.includes("AlgoExpert");

    return [foo, bar];
  })
  .then(([foo, bar]) => {
    console.log(fooObj, barObj);
  })
  .catch(() => {
    console.log("There was an error");
  });

fooObj.name += " is an ALgoExpert";
barObj.name += " is an SystemExpert";
console.log(fooObj, barObj);
*/

// Question 4
