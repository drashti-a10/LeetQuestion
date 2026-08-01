/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];

    if(p.length>s.length) return result;

    let pCount = new Array(26).fill(0);

    for(let char of p){
        pCount[char.charCodeAt(0) - 97]++;
    }

    let windowCount = new Array(26).fill(0);
    let left = 0;

    for(let right=0; right<s.length; right++){
        let rightIndex = s.charCodeAt(right) - 97;
        windowCount[rightIndex]++;

        if(right - left + 1 >p.length){
            let leftIndex = s.charCodeAt(left) - 97;
            windowCount[leftIndex]--;
            left++;
        }

        if(right-left+1 === p.length){
            let isAnagram = true;
            for(let i=0; i< 26; i++){
                if(pCount[i] !== windowCount[i]){
                    isAnagram = false;
                    break;
                }
            }
            if(isAnagram){
                result.push(left);
            }
        }
    }
    return result;
};