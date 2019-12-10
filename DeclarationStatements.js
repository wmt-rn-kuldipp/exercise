//let
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  
}
console.log(x);

//const
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
}
console.log(number);
