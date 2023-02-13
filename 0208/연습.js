/* for (let i = 1; i < 10; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
} */

/* for (let i = 10; i > 0; i--) {
  if (i % 2 === 1) continue;
  console.log(i);
} */

/* for (let j = 1; j < 10; j++) {
  if (j % 2 === 0) continue;
  console.log(j);
} */

//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
/* for (let i = 10; i < 20; i++) {
  console.log(i);
} */

//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
/* for (let i = 0; i < 10; i++) {
  if (i % 2 === 1) continue;
  let j = String(i);
  console.log(j);
  console.log(typeof j);
} */

//5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
/* let i, j;
i = 1;
j = 1;
while (i < 10) {
  i++;
  if (i % 2 === 1) continue;
  console.log(i);
}
 */

//6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
/* let i;
i = 10;
while (i > 0) {
  i--;
  if (i % 2 === 0) continue;
  console.log(i);
} */

//7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
/* let i, sum;
i = 0;
sum = 0;
for (i; i < 10; i++) {
  sum += i;
}

console.log(sum); */

//8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
/* let i, sum;
i = 0;
sum = 0;
for (i; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) continue;
  sum += i;
}

console.log(sum);
 */

console.log(typeof undeclaredVariable);
// 출력 결과: "undefined"

console.log(typeof null);
// 출력 결과: "object"

console.log(typeof true);
// 출력 결과: "boolean"

console.log(typeof 27);
// 출력 결과: "number"

console.log(typeof "YD");
// 출력 결과: "string"

console.log(typeof Symbol());
// 출력 결과: "symbol"

console.log(typeof function () {});
// 출력 결과: "function"

console.log(typeof {});
// 출력 결과: "object"
