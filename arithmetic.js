// 구구단 프로그램

// 2가지 수 입력받기
const number1 = prompt("첫번째 숫자를 입력하세요.");
const number2 = prompt("두번째 숫자를 입력하세요.");

// 숫자로 변경하기
const a = Number(number1);
const b = Number(number2);

// 사칙연산 결과 입력하기
const sum = a + b;
const minus = a - b;
const multiply = a * b;
const divide = a / b;

// 화면에 출력하기
alert(`${a} + ${b} = ${sum}`);
alert(`${a} - ${b} = ${minus}`);
alert(`${a} * ${b} = ${multiply}`);
alert(`${a} / ${b} = ${divide}`);

// 콘솔에 출력하기
console.log(`${a} + ${b} = ${a + b}`);

/*
// Get the input numbers and parse them as floats
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));

// Verify the input is valid numbers
if (isNaN(number1) || isNaN(number2)) {
  console.error("Invalid input.");
} else {
  // Calculate the results
  const sum = number1 + number2;
  const difference = number1 - number2;
  const product = number1 * number2;
  const quotient = number1 / number2;

  // Format the results to two decimal places
  const sumStr = sum.toFixed(2);
  const differenceStr = difference.toFixed(2);
  const productStr = product.toFixed(2);
  const quotientStr = quotient.toFixed(2);

  // Output the results to the console
  console.log(`${number1} + ${number2} = ${sumStr}`);
  console.log(`${number1} - ${number2} = ${differenceStr}`);
  console.log(`${number1} * ${number2} = ${productStr}`);
  console.log(`${number1} / ${number2} = ${quotientStr}`);
}

*/
