/**
 * 和为 k 的数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 */

function subarraySum(nums: number[], k: number): number {
  /** 前缀和 */
  let sum = 0;
  /** 哈希表 */
  const map = new Map<number, number>();

  map.set(0, 1); // 初始化，空集为 0，所以设置成 1

  let res = 0;

  for (let n of nums) {
    sum += n; // 前缀和维护

    /** 满足这个前缀和的之前的前缀和，如果有满足的就是有合格的子数组 */
    const preSumI = map.get(sum - k);
    if (preSumI) {
      res += preSumI;
    }

    // 每个前缀和满足的之前的前缀和都记录下来
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return res;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));

/**
 * 核心:
 * perSum[j] - preSum[i] = k, j > i
 * i 到 j 的子数组, 其中 preSum[j] 是 sum
 */
