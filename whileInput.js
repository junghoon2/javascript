// 배열을 초기화
let num = [];

// 입력을 받아야지
var n = parseFloat(prompt("숫자를 입력하세요"));

// '0'을 입력받으면 종료
while (n != 0) {
  n = parseFloat(prompt("숫자를 입력하세요"));
  num.push(n);
}

// 배열의 갯수와 합을 출력
let count = num.length;
var sum = 0;

for (i = 0; i < num.length; i++) {
  sum = sum + num[i];
}

console.log(count, sum);
