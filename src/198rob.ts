/**
 * 198. 打家劫舍
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

function rob(nums: number[]): number {
  const dp: number[] = [];

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

function rob2(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let p1 = nums[0];
  let p2 = Math.max(nums[0], nums[1]);
  let res = 0;

  for (let i = 2; i < nums.length; i++) {
    res = Math.max(nums[i] + p1, p2);
    p1 = p2;
    p2 = res;
  }

  return res;
}

console.log(rob2([1, 2, 3, 1]));
console.log(rob2([2, 7, 9, 3, 1]));
