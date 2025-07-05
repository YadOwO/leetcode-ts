/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

class BrowserHistory {
  /** 历史列表 */
  public _history: string[] = [];
  /** 当前的索引 */
  public _currentIndex = 0;

  public constructor(homepage: string) {
    this._history.push(homepage);
    this._currentIndex = 0;
  }

  public visit(url: string) {
    // 设置浏览器的长度
    this._history.splice(this._currentIndex + 1);
    // 添加新的url
    this._history.push(url);
    // 设置当前的索引
    this._currentIndex = this._history.length - 1;
  }

  public back(steps: number): string {
    // 设置当前的索引
    this._currentIndex = Math.max(0, this._currentIndex - steps);
    // 返回当前的url
    return this._history[this._currentIndex];
  }

  public forward(steps: number): string {
    // 设置当前索引
    this._currentIndex = Math.min(this._history.length - 1, this._currentIndex + steps);
    // 返回当前的url
    return this._history[this._currentIndex];
  }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');
browserHistory.visit('facebook.com');
browserHistory.visit('youtube.com');
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.forward(1));
console.log(browserHistory.visit('linkedin.com'));
console.log(browserHistory.forward(2));
console.log(browserHistory.back(2));
console.log(browserHistory.back(7));
