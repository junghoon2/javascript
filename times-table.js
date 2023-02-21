// 원하는 숫자를 사용자 입력에서 저장
let num = prompt("Please enter a number");

// 구구단 출력하기
for (let i = 1; i <= 9; i++) {
  // console.log(`${num} * ${i} = ${num * i}`);
  // 줄바꿈
  document.write(`${num} * ${i} = ${num * i} <br>`);
}
