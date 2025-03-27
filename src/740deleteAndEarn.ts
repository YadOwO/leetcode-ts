/**
 * 740. 删除并获得点数
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 */

/**
 * 时间：O(n + m log m)
 * 空间：O(m)
 * 其中 m 是去重后数字的个数
 */
function deleteAndEarn(nums: number[]): number {
  const points = new Map();

  // 统计每个数字的得分
  for (let num of nums) {
    points.set(num, (points.get(num) || 0) + num);
  }

  /** 对 key 排序后的数组 */
  const uniqueNums = Array.from(points.keys()).sort((a, b) => a - b); // 标准比较排序时间复杂度 O(m log m)

  let prev = 0; // dp[i - 2]
  let curr = 0; // dp[i - 1]
  let prevNum = -1;

  for (let num of uniqueNums) {
    let maxPoint = points.get(num);

    if (num === prevNum + 1) {
      // 相邻数字，不能选上一个
      [prev, curr] = [curr, Math.max(curr, prev + maxPoint)];
    } else {
      // 不相邻，可以直接加
      [prev, curr] = [curr, curr + maxPoint];
    }

    prevNum = num;
  }

  return curr;
}

console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));

/**
 * 时间：O(n + maxVal)
 * 空间：O(maxVal)
 * 其中 m 是去重后数字的个数
 */
function deleteAndEarn2(nums: number[]): number {
  const maxVal = Math.max(...nums);
  const points = new Array(maxVal + 1).fill(0);

  for (let num of nums) {
    points[num] += num;
  }

  let prev = 0;
  let curr = 0;

  for (let i = 0; i <= maxVal; i++) {
    [prev, curr] = [curr, Math.max(curr, prev + points[i])];
  }

  return curr;
}

console.log(deleteAndEarn2([3, 4, 2]));
console.log(deleteAndEarn2([2, 2, 3, 3, 3, 4]));
