// 1부터 100까지의 짝수의 합

var sum = 0;

// 반복
// i에 숫자형을 안 넣었는데 숫자로 인식하나?
for (var i = 1; i <= 100; i++) {
  // 나머지는 %로 계산
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(typeof i);
console.log(sum);

document.write("1부터 100까지 짝수의 합은" + sum + "입니다.");
