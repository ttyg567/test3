/* # Assignment

### 아래 과제들을 수행해주세요.

- `index.js` 에 variables 라는 함수가 있습니다.
- 그 안에 `myAge` 라는 변수가 이미 선언되어 있습니다.
- `yourAge` 라는 변수를 새롭게 선언하고 나이를 할당해주세요.
- `myAge` 와 `yourAge` 변수의 합이 50이 될 수 있도록 `yourAge` 의 값을 정해주세요. */

// Assignment - 다음 함수 안에 코드를 작성하시면 됩니다.
function variables() {
  // 다음 코드는 수정하거나 지우지 마세요.
  const myAge = 21;
  // 아래에 코드를 작성해 주세요.
  let yourAge;
  yourAge = 50 - myAge;
  // 다음 코드는 수정하거나 지우지 마세요.
  return myAge + yourAge;
}

console.log(variables());
