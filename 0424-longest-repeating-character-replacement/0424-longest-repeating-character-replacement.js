/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxFre = 0;
    let maxLen = 0;
    let map = {};
    let left = 0;

    for(let right = 0; right<s.length; right++){
        let char = s[right];
        map[char] = (map[char] || 0) + 1;
        maxFre = Math.max(maxFre, map[char]);

        while((right - left + 1) - maxFre > k){
            map[s[left]]--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left +1);
    }
    return maxLen;
};