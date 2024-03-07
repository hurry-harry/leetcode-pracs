// Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n))

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5

export class FindMedianSortedArrays {
  findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let median = 0;
    let array: number[] = [];

    let nums1Index: number = 0;
    let nums2Index: number = 0;

    let nums1Finished: boolean = nums1Index === nums1.length;
    let nums2Finished: boolean = nums2Index === nums2.length;

    for (let i = 0; i < (nums1.length + nums2.length); i++) {
      if (nums1[nums1Index] === nums2[nums2Index]) {
        array.push(nums1[nums1Index]);
        nums1Index++;

        if (nums1Index === nums1.length)
          nums1Finished = true;
      } else if (nums1[nums1Index] > nums2[nums2Index] || (!nums2Finished && nums1Finished)) {
        array.push(nums2[nums2Index]);
        nums2Index++;

        if (nums2Index === nums2.length)
          nums2Finished = true;
      } else if (nums1[nums1Index] < nums2[nums2Index] || (!nums1Finished && nums2Finished)) {
        array.push(nums1[nums1Index]);
        nums1Index++;

        if (nums1Index === nums1.length)
          nums1Finished = true;
      }
    }

    let midPoint: number = array.length / 2;
    if (array.length % 2 === 0) {
      median = (array[midPoint] + array[midPoint - 1]) / 2;
    } else {
      median = array[Math.floor(midPoint)];
    }

    return median;
  };
}