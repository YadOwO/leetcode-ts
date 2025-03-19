/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/**
 * 爬楼梯
 * @param {number} n n 阶楼梯
 * @return {number} 有多少种方法
 * @description 时间 O(n) 空间 O(n) 经典动态规划
 */
function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp: number[] = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(4));

/**
 * 爬楼梯
 * @param {number} n n 阶楼梯
 * @return {number} 有多少种方法
 * @description 时间 O(n) 空间 O(1) 动态规划优化，不需要存储全部的 dp 数组
 */
function climbStairs2(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let pre2 = 2; // 对应 dp[i-1]
  let pre1 = 1; // 对应 dp[i-2]
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = pre2 + pre1;
    pre1 = pre2;
    pre2 = current;
  }

  return current;
}

console.log(climbStairs2(5));

/**
 * 爬楼梯
 * @param {number} n n 阶楼梯
 * @return {number} 有多少种方法
 * @description 时间 O(1) 空间 O(1) 斐波那契数列公式 （缺点：浮点数精度可能导致误差）
 */
function climbStairs3(n: number): number {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;
  return Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5);
}

console.log(climbStairs3(100));

/**
 * 题解
 * 从 n 层楼梯来看，我们有两种选择：
	•	走 1 阶，则剩 n-1 层，问题变成 climbStairs(n-1)
	•	走 2 阶，则剩 n-2 层，问题变成 climbStairs(n-2)
  所以状态转移方程是：
  f(n) = f(n-1) + f(n-2)
 */
