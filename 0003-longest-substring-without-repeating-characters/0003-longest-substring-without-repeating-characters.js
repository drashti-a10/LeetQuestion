/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    let maxlength = 0;

    for(let right = 0; right<s.length; right++){
        let char = s[right];

        if(map[char]!== undefined && map[char]>=left){
            left = map[char] + 1;
        }

        map[char] = right;
        maxlength = Math.max(maxlength, right - left + 1);
    }
    return maxlength;
};