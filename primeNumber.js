// 소수 판별하기

// 입력받기
const num = parseFloat(prompt("숫자를 입력하세요"));
console.log(typeof(num))
console.log(isNaN(num))

// isPrime이라는 변수를 사용한다.
var isPrime = true;

// 반복, 조건문
for (var i = 2; i < num; i++) {
  if (isNaN(num) === true) {
    document.write("숫자를 입력해주세요");
    isPrime = false;
    break;
  } else if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  document.write(`${num}(은)는 소수입니다.`);
} else {
  document.write(`${num}(은)는 소수가 아닙니다.`);
}
