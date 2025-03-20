/**
 * 泰波那契序列 Tn 定义如下：
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 */

function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let pre1 = 0;
  let pre2 = 1;
  let pre3 = 1;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = pre1 + pre2 + pre3;
    pre1 = pre2;
    pre2 = pre3;
    pre3 = current;
  }

  return current;
}

console.log(tribonacci(25));
