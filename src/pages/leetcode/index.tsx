import React from 'react';

function Index() {

  //两数之和
  const addTwoNumbers = function (l1, l2) {
    const getNum = (arr) => {
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

    console.log(result);
    return result;
  };

  const longestPalindrome = (s: string) => {
  };

  return (
    <>
      <div>
        1.两数相加 输入[2, 4, 3], [5, 6, 4]
        <a href={'https://leetcode.cn/problems/add-two-numbers/'} target={'_blank'}>题目</a>
        <div onClick={() => addTwoNumbers([2, 4, 3], [5, 6, 4])}>运行解法</div>
      </div>
      <div>
        1.最长回文子串 输入"babad"
        <a href={'https://leetcode.cn/problems/longest-palindromic-substring/'} target={'_blank'}>题目</a>
        <div onClick={() => longestPalindrome('babad')}>运行解法</div>
      </div>
    </>
  );
}

export default Index;
