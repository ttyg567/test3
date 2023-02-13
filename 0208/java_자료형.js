// 숫자열

let sum = 0.1 + 0.2; //자바스크립트는 소수 계산을 잘 못해서 표기가 이상하게 됨(0.30000000000000004)
console.log(sum);

let sum2 = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum2);

// 문자열

let string1 = "hello, world!";
console.log(string1);

let string2 = "hello, world?";
console.log(string2);

let string3 = "hello," + "wor\nld!"; // \n 은 줄바꿈
console.log(string3);

// 논리형

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);

let boolean3 = 10 < 20;
console.log(boolean3);

let boolean4 = 10 > 20;
console.log(boolean4);

// 배열
let studentscore = [60, 70, 80, 90];
console.log(studentscore[1]); // 첫번째 요소가 0부터 시작이기 때문에 1은 70을 가져옴

let studentscore2 = [60, "점수", 80, true];
console.log(studentscore2[3]);
console.log(studentscore2[1]);

//객체(교재 p468)
let studentscore3 = {
  ko: 80,
  ko2: 90,
  ko3: 870,
};

console.log(studentscore3.ko);
console.log(studentscore3["ko2"]);
