let i, j, an, bn;
i = 0;
an = "*";
bn = " ";

for (i; i <= 5; i++) {
  j = 5 - i;
  console.log(bn.repeat(j) + an.repeat(i));
}
