// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

export class TwoSum {
  twoSum(nums: number[], target: number): [number, number] {
    let hash: Map<number, number> = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (hash.has(complement))
        return [i, hash.get(complement)!]
      else
        hash.set(nums[i], i);
    }

    return [-1, -1];
  }
}