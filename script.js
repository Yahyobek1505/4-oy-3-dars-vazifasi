/********************* Uyga vazifa masalalar *******************/
// <=================>1-masala1<===========>.
/* let num1 = 15;
let num2 = 40;
let num3 = 20;

let sum = 0;
let counter = 1;

if (num1 % 2 == 0 && num1 % 5 == 0) {
  sum += num1;
  counter *= num1
}
if (num2 % 2 == 0 && num1 % 5 == 0)  {
  sum += num2;
  counter *= num2;
}
if (num3 % 2 == 0 && num1 % 5 == 0) {
  sum += num3;
  counter *= num3;
}
console.log(sum);
 */

// <==========================> 2-masala sharti. <==================>
// let num1 = 50;
// let num2 = 14;
// let num3 = 10;
// let num4 = 27;

// let counter = 1;

// if (num1 % 3 == 0 || num1 % 7 == 0) {
//   counter *= num1;
// }
// if (num2 % 3 == 0 || num2 % 7 == 0) {
//   counter *= num2;
// }
// if (num3 % 3 == 0 || num3 % 7 == 0) {
//   counter *= num3;
// }
// if (num4 % 3 == 0 || num4 % 7 == 0) {
//   counter *= num4;
// }

// console.log(counter);

// <==========================> 3-masala sharti. <==================>

// let num = prompt("Ikki xonali son kiriting" )

// let left = num / 10;

// let rightNumber = num % 10;
// let leftNumber = Math.round(left);

// let result = rightNumber * leftNumber;

// alert(result);
// console.log(result);
// console.log(rightNumber);
// console.log(leftNumber);

// <==========================> 4-masala sharti. <==================>

// let num = prompt("Ikki xonali son kiriting" )
// let left = num / 10;
// let butun = Math.trunc(left);

// // Testing
// if (butun % 2 == 0) {
//   alert(butun ** 2)
//   console.log(butun ** 2)
// } else {
//   alert(butun ** 3)
//   console.log(butun ** 3)
// }
// console.log(left);
// console.log(butun);

// <==========================> 5-masala sharti. <==================>

// let num = prompt("Uch xonali son kiriting" )
// let num =123;
// let left = num / 10;
// let butun = Math.trunc(left);
// let son1 = butun / 10;
// let son2 = butun % 10;
// let son = Math.trunc(son1)

// Testing

// console.log(son);
// console.log(son2);

// <==========================> 6-masala sharti. <==================>

// let num = prompt("Uch xonali son kiriting" )
// let num = 574;
// let sum = 1;
// let butun = num / 10;
// let midleNum = Math.trunc(butun);
// // console.log(midleNum);

// // First number finder
// let butunRight = midleNum / 10;
// // console.log(butunRight);
// let firstNum = (Math.trunc(butunRight));

// // Testing
// if (firstNum % 2 == 1) {
//   sum *= firstNum;
// }
// // Midle number finder
// let midle = midleNum % 10;
// // console.log(midle);
// let first = butun % 10;

// // Testing
// if (midle % 2 == 1) {
//   sum *= midle;
// }
// // Last number finder
// let last = num % 10;
// // console.log(last);

// // Testing
// if (last % 2 == 1) {
//   sum *= last;
// }
// console.log(sum);
// console.log(butun);

// <==========================> 7-masala sharti. <==================>

// let num = prompt("To'rt xonali son kiriting" )
// let num = 2548;
// let counter = 0;
// // Last number finder

// let butun = num % 10;
// console.log(butun);
// let midleNum = Math.trunc(butun);
// // Testing
// if (midleNum % 2 == 0) {
//   counter++;
// }

// // All number finder

// let all = num / 10;
// let allNumber = Math.trunc(all)
// console.log(allNumber);

// let allButun = allNumber % 10;
// console.log(allButun);
// // Testing
// if (allButun % 2 == 0) {
//   counter++;
// }

 // Second number finder

// let twoNumber = allNumber / 10;
// console.log(twoNumber);
// let second = Math.trunc(twoNumber);
// console.log(second);

 // Testing
// if (second % 2 == 0) {
//   counter++;
// }

 // First number finder

// let firstNumber = second % 10;
// console.log(firstNumber);

// let firsNumber = second / 10;
// console.log(twoNumber);
// let first = Math.trunc(firsNumber);
// console.log(first);

// Testing
// if (first % 2 == 0) {
//   counter++;
// }
// alert(counter);
// console.log(counter);

// <==========================> 8-masala sharti. <==================>

// let a = prompt("To'rtburchakning 1-tomonini kiriting.")
// let b = prompt("To'rtburchakning 1-tomonini kiriting.")
// let a = 15;
// let b = 32;

// let per = 2 * a + 2 * b;

// let yuza = a * b;

// if (yuza > per) {
//   console.log(2*2);
//   console.log(yuza)
// } else {
//   console.log(per)
// }

// <==========================> 9-masala sharti. <==================>

// let num = prompt("Besh xonali son kiriting" )
// // let num = 90500;
// let countZero = 0;

// // // Last number finder

// let butun = num % 10;
// console.log(butun);

// // Testing
// if (butun == 0) {
//   countZero++;
// }

// // All number finder
// let allNumber = num / 10;
// let second = Math.trunc(allNumber);
// // console.log(second);

// // Testing
// if (allNumber == 0) {
//   countZero++;
// }
// // Second number finder
// let secondNumber = second % 10;
// console.log(secondNumber);

//  // Testing
// if (secondNumber == 0) {
//   countZero++;
// }

//  // two number finder
//  let twoNumber = second / 10;
// let secondNum = Math.trunc(twoNumber);
// //  console.log(secondNum);


// let threeNum  = secondNum % 10;
// console.log(threeNum);

// // Testing
// if (twoNumber == 0) {
//   countZero++;
// }
// // 
// let oneNum  = secondNum / 10;
// let perNum = Math.trunc(oneNum);
// // console.log(perNum);

// //

// let firsNumber  = perNum % 10;
// console.log(firsNumber);
// // Testing
// if (firsNumber == 0) {
//   countZero++;
// }

// //

// let bigNum  = perNum / 10;
// let intNum = Math.trunc(bigNum);
// console.log(intNum);
// // Testing
// if (intNum == 0) {
//   countZero++;
// }
// alert(countZero);
// console.log(countZero);

// <==========================> 10-masala sharti. <==================>

// let t =2;
// let T =25;

// let result = (t+T) % 24;
// console.log(result);
