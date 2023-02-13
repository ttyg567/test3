/* console.log("=====파라미터가 없는 함수=====");
function noParameter() {
  return 10;
}

const result4 = noParameter();

console.log(result4); */

//----------------------------------------------------------------------
//----------------------------------------------------------------------

/* console.log("=====파라미터를 받는 함수=====");

function getName(name) {
  return name + "님";
}

const result1 = getName("허인");
const result2 = getName("윤종규");
const result3 = getName("김기현");

console.log(result1);
console.log(result2);
console.log(result3);
 */
//----------------------------------------------------------------------
//----------------------------------------------------------------------

/* console.log("=====return을 생략한 함수=====");
function noReturn(age) {
  const mix = age * 1000;
  // 계산해도 아무것도 반환하지 안함!
}

const result6 = noReturn(10);
console.log(result6); */

//----------------------------------------------------------------------
//----------------------------------------------------------------------

/* # Assignment

함수 작성에 익숙해지셨나요? 아래의 설명을 듣고 함수를 작성해주세요.

- 함수 이름은 `addTen` 입니다.
- 받은 parameter에 10을 더해서 반환(return)해주세요. */

function addTen(num) {
  // 코드를 작성해주세요
  let answer;
  answer = parseInt(num) + 10;
  return answer;
}

console.log(addTen(23));
