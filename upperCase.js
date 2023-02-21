// 문장 입력을 받아요
const sentence = prompt("문장을 입력해주세요");

// 대문자, 소문자 변수로 저장해요.
const uppercase = sentence.toUpperCase();
const lowercase = sentence.toLowerCase();

console.log(uppercase);

// 숫자는 변화가 없어요.

// 서로 비교를 해요.
if (sentence === uppercase) {
  console.log("대문자 문장입니다.");
} else if (sentence === lowercase) {
  console.log("소문자 문장입니다.");
} else {
  console.log("보통 문장입니다.");
}
