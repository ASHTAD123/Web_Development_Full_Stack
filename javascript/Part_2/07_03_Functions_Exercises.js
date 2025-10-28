//sum of N numbers
function sumOfN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

//Multuplication table
function printMultiplicationTable(n) {
  let product;
  let table = [];

  for (let i = 1; i <= 10; i++) {
    product = n * i;
    let st = `${n} * ${i} = ${product}`;
    table.push(st);
  }
  return table;
}

//count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//square numbers
let arr = [1,2,3,4,5];
const squareNumbers = (arr) => {
  let c= arr.map(n=> n * 2);
  return c;
};
 let res = squareNumbers(arr);
 console.log(res);

 