// 함수 만들기
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * (5 / 9);
  var celsius = celsius.toFixed(2);

  return celsius;
}

// 화씨 입력받기
const fahrenheit = parseFloat(prompt("화씨를 입력하세요"));

const celsius = fahrenheitToCelsius(fahrenheit);

// 출력하기
console.log(celsius);
