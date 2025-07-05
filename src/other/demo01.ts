/**
 * 宝宝和妈妈参加亲子游戏，在一个二维矩阵（N*N）的格子地图上，宝宝和妈妈抽签决定各自的位置，地图上每个格子有不同的糖果数量，部分格子有障碍物。
 * 游戏规则是妈妈必须在最短的时间（每个单位时间只能走一步）到达宝宝的位置，路上的所有糖果都可以拿走，不能走障碍物的格子，只能上下左右走。
 * 请问妈妈在最短到达宝宝位置的时间内最多拿到多少糖果（优先考虑最短时间到达的情况下尽可能多拿糖果）
 */

/**
 * 动态规划版
 * @param matrix 地图
 * @param start 起点
 * @param end 终点
 * @param obstacle 障碍物
 */
// function demo01(matrix: number[][], start: number[], end: number[], obstacle: number[]) {
//   /** 地图列数 */
//   const n = matrix.length;
//   /** 地图行数 */
//   const m = matrix[0].length;
//   /** 动态规划数组 */
//   const dp = Array.from({ length: n }, () => Array(m).fill(0));
//   /** 初始化起点 */
//   dp[start[0]][start[1]] = matrix[start[0]][start[1]];
// }

// demo01(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [0, 0],
//   [1, 1],
//   [],
// );
