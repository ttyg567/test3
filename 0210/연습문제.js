/* # Assignment

### ✔ Assignment 1 : 함수 `halfNum` 를 선언하고 구현하세요.

1. 숫자로 된 인자 하나를 받습니다.
2. 받은 값을 2로 나눈 결과를 리턴합니다.
3. 매개변수 이름은 마음대로 정해서 사용합니다.

### ✔ Assignment 2 : 함수 `halfAddNum`를 선언하고 구현하세요.

1. 숫자로 된 인자 하나를 받습니다.
2. 1번 문제에서 만들었던 `halfNumber`를 호출하면서, 인자로 받았던 값을 다시 `halfNumber` 함수에 전달해줍니다.
3. `halfNumber`의 리턴결과를 함수 안쪽에서 변수명 `result`에 정의합니다.
4. `result`에 1을 더한 값을 리턴합니다. */

let num, num2, result;

function halfNum() {
  num = 22;
  num2 = num / 2;
  return num2;
}

function halfAddNum() {
  result = halfNum();
  result = parseInt(result);
  console.log(result + 1);
}

halfAddNum();
