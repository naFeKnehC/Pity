import React from 'react';

function Index() {

  //两数相加
  const addTwoNumbers = function (l1: number[], l2: number[]): void {
    const getNum = (arr: number[]) => {
      // currentIndex : 0,1,2,...,arr.length reduce存在初始值时从0开始 不存在时从1开始
      return arr.reduce((prev, curr, currentIndex, arr) => {
        prev += curr * 10 ** (arr.length - currentIndex - 1);
        return prev;
      }, 0);
    };

    const num1 = getNum(l1);
    const num2 = getNum(l2);
    const num3 = num1 + num2;
    const result = num3.toString().split('').reverse().map(item => +item);

    alert(result);
  };

  //5.最长回文子串
  const longestPalindrome = (s: string): string => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        const {start, curr, str} = map.get(s[i]);
        if (s[i] === s[i - 1]) {//如果是连续相同字母
          if (i - start + 1 >= str.length) {//长度大于已存在串
            map.set(s[i], {start, curr: i, str: s.substring(start, i + 1)});
          }
        } else {

        }
      } else {
        map.set(s[i], {start: i, curr: i, str: s[i]});
      }
    }
    let str = '';
    console.log(map);
    // map.forEach(item => {
    //   if (item.length >= str.length) {
    //     str = s.substring(item.maxIndex - item.length, item.maxIndex + 1);
    //   }
    // });
    console.log(str);
    return str;
  };

  return (
    <>
      <div>🔥 LeetCode 热题 HOT 100</div>
      <div>
        2.两数相加 输入[2, 4, 3], [5, 6, 4] 输出[7,0,8]
        <a href={'https://leetcode.cn/problems/add-two-numbers/'} target={'_blank'}>题目</a>
        <div onClick={() => addTwoNumbers([2, 4, 3], [5, 6, 4])}>运行解法</div>
      </div>
      <div>
        5.最长回文子串 输入"babad" 输出"bab"或"aba"
        <a href={'https://leetcode.cn/problems/longest-palindromic-substring/'} target={'_blank'}>题目</a>
        <div onClick={() => longestPalindrome('babad')}>运行解法{longestPalindrome('aacaa')}</div>
      </div>
    </>
  );
}

export default Index;
