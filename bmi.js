// 입력을 숫자로 받기
const weight = parseFloat(prompt("숫자로 몸무게(kg)를 입력하세요."));
const height = parseFloat(prompt("숫자로 키(cm)를 입력하세요."));

// centimeter to meter
const height01 = height / 100;

// bmi 계산.
// bmi 계산 시 height를 100으로 나누고 그 값을 제곱근한다.
const bmi = weight / height01 ** 2;

// 출력
console.log(`당신의 BMI는 ${bmi}입니다.`);
