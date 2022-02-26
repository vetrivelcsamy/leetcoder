###  **Pseudo code**
​
```
for i to n
for j + 1 to n
if j + i == target
return [i, j]
```
​
​
​
Time complexity: `O(n ^ 2)`
Space complexity: `O(1)`
​
## Brute force
​
```
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
for (let i = 0; i < nums.length; i++) {
for (let j = i + 1; j < nums.length; j++) {
if (nums[i] + nums[j] === target) {
return [i, j];
}
}
}
};
```
​