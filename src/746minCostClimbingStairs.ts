/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 */

/**
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 */

function minCostClimbingStairs(cost: number[]): number {
  let p1 = 0;
  let p2 = 0;

  cost.push(0);

  for (let i = 2; i <= cost.length; i++) {
    const nextInCost = Math.min(cost[i - 1] + p2, cost[i - 2] + p1);
    p1 = p2;
    p2 = nextInCost;
  }

  return p2;
}

console.log('res:', minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
