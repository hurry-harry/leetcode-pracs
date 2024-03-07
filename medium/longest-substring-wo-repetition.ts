// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

export class LongestSubstringWithoutRepeatingCharracters {
  lengthOfLongestSubstring(s: string): number {
    let charMap: Map<string, number> = new Map<string, number>();
    let length: number = 0;
    let sArray: string[] = s.split('');
    let window: number = 0;
  
    for (let i = 0; i < sArray.length; i++) {
        // Get index of current char in the CharMap
        let charIndex: number = charMap.get(sArray[i])!;
  
        // See if char is already in Map and if already exists in current window
        if (charIndex >= window) {
            // adjust the window to next char because found within current window
            window = charIndex + 1;
        }
  
        // add new char and index in sArray to Map
        charMap.set(sArray[i], i);
  
        // set length to current window if bigger than curr length
        length = Math.max(
            length,
            i - window + 1
        );
    }
  
    return length;
  };
}