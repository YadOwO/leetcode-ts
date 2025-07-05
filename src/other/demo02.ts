function getMoneyAmount(n: number) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      let j = i + len - 1;
      dp[i][j] = Infinity;

      for (let k = i; k <= j; k++) {
        // 猜k时，考虑最坏情况
        const cost = k + Math.max(k - 1 >= i ? dp[i][k - 1] : 0, k + 1 <= j ? dp[k + 1][j] : 0);
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }

  return dp[1][n];
}

console.log(getMoneyAmount(1));
console.log(getMoneyAmount(2));
console.log(getMoneyAmount(3));
console.log(getMoneyAmount(4));
console.log(getMoneyAmount(5));
