/**
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *
 *  F(0) = 0，F(1) = 1
 *  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 *  给定 n ，请计算 F(n) 。
 */

/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let pre1 = 0;
  let pre2 = 1;
  let current = 0;

  for (let i = 2; i <= n; i++) {
    current = pre1 + pre2;
    pre1 = pre2;
    pre2 = current;
  }

  return current;
};

console.log(fib(4));
