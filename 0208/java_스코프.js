// 스코프

/* let a = 10; //전역스코프, 전역변수
function sum() {
  console.log(`함수 내부 : ${a}`); // `: backtick
}
sum();
console.log(`함수 외부 : ${a}`); */

/* let a = 10; //전역스코프, 전역변수
{
  let b = 20;
  console.log(`코드 블록 내부 a: ${a}`);
  console.log(`코드 블록 내부 b: ${b}`);
}
console.log(`코드 블록 외부 a: ${a}`);
console.log(`코드 블록 외부 b: ${b}`); */

let a = 10;
const b = 20;
function sum() {
  let a = 50;
  let b = 70;
  console.log(`함수 내부 a: ${a}`);
  console.log(`함수 내부 a: ${a}`);
}
