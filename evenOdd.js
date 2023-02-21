// 숫자로 입력받기
let num = parseFloat(prompt("숫자를 입력해주세요"));

// 한자리 정수로 변경하기
let intNum = num.toFixed(0);

// 숫자인지 검증해야지
// 짝수, 홀수 판단하기
if (isNaN(intNum)) {
  console.log("숫자를 입력해주세요");
} else if (intNum % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}