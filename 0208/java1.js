console.log("df"); /* f12개발자도구 콘솔창에서 보여짐 */
document.write("자바스크립트");

/* 맨 위부터 오류가 발생하면 그 이후로 실행 안됨 */
/* 개발자도구 들어가면 어디서 오류 발생했는지 볼 수 있음 */

/* alert("tf");      *확인알림
confirm("tf");       *확인 및 취소까지 가능
var reply = confirm("ddd");
var reply = prompt("ddddddddddd", "jhjh"); */

document.write(
  "<h1> 자바스크립트 </h1>" + "추가하고 싶은 문자열"
); /* 뒤에 바로 붙어서 추가됨 (h1은 블록요소라 밑줄로)*/
document.write(
  "자바스크립트" + "추가하고 싶은 문자열" + "문자열2"
); /* '' 사용 가능 */

// 주석 사용하는 방법 (한줄만 가능)
// html에서 쓰는 방법은 여러 줄을 설정할 때 사용

var n = 10;
console.log(n);

// 함수
// var 특정 오류가 나는 경우가 있어서 let을 주로 사용
// let
// const

var n = 10;
var n = 20;
console.log(n);
// var 함수는 마지막 내용만 인식하고 할당시킴(n에 20을 할당시키고 반환함)

/* let n = 10;
let n = 20;
console.log(n);
// 오류 발생함 */

// ctrl + shift + L 같은 요소를 한번에 수정(단, 전체 문서의 다른 요소까지 포함 할 수 있으니 주의)

var currentyear = 2023;
var birthyear;
var age;
// 위 두줄은   var birthyear, age;   이렇게 한 줄로도 작성 가능

/* var birthyear, age, currentyear;
currentyear = 2023;      --> 이렇게 써도 위와 같은 의미*/

birthyear = prompt("태어난 연도를 입력하세요.");
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write(birthyear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");
