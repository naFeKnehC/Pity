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
		/*
		   dbbc
		   cbbd
		 */
		let str: string = '';
		for (let i = 0; i < s.length; i++) {
			// let length = 0;
			// while (i - length >= 0 && i + length + 1 < s.length && s[i - length] === s[i + length + 1]) {
			// 	const newStr = s.substring(i - length, i + length + 2);
			// 	str = newStr.length > str.length ? newStr : str;
			// 	length++;
			// }

			let length1 = 0;
			while (i - length1 >= 0 && i + length1 < s.length) {
				if (s[i - length1] === s[i + length1]) {
					const newStr = s.substring(i - length1, i + length1 + 1);
					str = newStr.length > str.length ? newStr : str;
				}
				length1++;
			}
		}
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
				<div onClick={() => longestPalindrome('babad')}>运行解法{longestPalindrome('aaa')}</div>
			</div>
		</>
	);
}

export default Index;
