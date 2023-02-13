// 반복문

var sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

document.write("1부터 5까지 더하면 " + sum);

//---------------------------------------------------------//

// for문

var i;
var sum = 0;

for (i = 1; i < 6; i++) {
  sum += i;
}
// i++ 로 하는 것은 계산 된 후에 뒤에 더해라 라는 의미로..

document.write("for문 사용: 1부터 5까지 더하면 " + sum);

//---------------------------------------------------------//

var i, j;
for (i = 1; i <= 9; i++) {
  document.write("<h3>" + i + "단</h3>");
  for (j = 1; j <= 9; j++) {
    document.write(i + "X" + j + " = " + i * j + "<br>");
  }
}
