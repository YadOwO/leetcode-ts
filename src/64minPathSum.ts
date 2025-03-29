/**
 * 64. 最小路径和
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 *
 * tips: 我先写的 62，再写的 64
 */

/**
 * 时间：O(m*n)
 * 空间：O(n)
 */
function minPathSum(grid: number[][]): number {
  /** 有多少行 */
  const n = grid[0].length;
  /** 总共有多少列 */
  const m = grid.length;

  const dp: number[] = [...grid[0]];

  // 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[j] = dp[j] + dp[j - 1];
  }

  // 初始化第一列
  for (let i = 1; i < m; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }

  if (n === 1) return grid[m - 1][0]; // 如果只有一行
  if (m === 1) return dp[n - 1]; // 如果只有一列

  // 第二列、第二行开始
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (j === 1) {
        dp[j] = Math.min(dp[j], grid[i][0]) + grid[i][j];
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
      }
    }
  }

  return dp[n - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);

console.log(minPathSum([[1], [1]]));

/**
 * 时间：O(m*n)
 * 空间：O(n)
 * 上面的优化写法，对 grid[i][0] 的处理进行了优化
 */
function minPathSum2(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(n).fill(0);

  // 初始化第一行
  dp[0] = grid[0][0];
  for (let j = 1; j < n; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    // 第一列特殊处理
    dp[0] = dp[0] + grid[i][0];
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }

  return dp[n - 1];
}

console.log(
  minPathSum2([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);

console.log(
  minPathSum2([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);

/**
 * 时间：O(m*n)
 * 空间：O(1) 因为是原地修改的 grid
 */
function minPathSum3(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) grid[i][j] += grid[i][j - 1];
      else if (j === 0) grid[i][j] += grid[i - 1][j];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
}

console.log(
  minPathSum3([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);

console.log(
  minPathSum3([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);
