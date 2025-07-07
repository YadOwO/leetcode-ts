/**
 * 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */

/**
 * 时间和空间：O(m * n)
 */
function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;

  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));

/**
 * 降成一维数组
 * 空间是: O(n)
 */
function uniquePaths2(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;

  const dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1]; // 上一格 + 左一格
    }
  }

  return dp[n - 1];
}

console.log(uniquePaths2(3, 7));
console.log(uniquePaths2(3, 2));

/**
 * 空间: O(1)
 * 时间: O(min(m, n))
 * 要得出最终的总步数，可以转换成：从总步数中选出向下的点（或者向右的点）
 * 在所有步中选出向下的点: C(m + n - 2, m - 1)
 */
function uniquePaths3(m: number, n: number): number {
  let res = 1;
  for (let i = 1; i <= m - 1; i++) {
    res = (res * (n - 1 + i)) / i;
  }
  return Math.round(res); // 防止精度误差
}

console.log(uniquePaths3(3, 7));
console.log(uniquePaths3(3, 2));
