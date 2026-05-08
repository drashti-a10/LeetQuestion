/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let hash = {};

    for(let char of t){
        hash[char] = (hash[char] || 0) + 1;
    }

    let n = s.length;
    let m = t.length;

    let left = 0;
    let right = 0;

    let count = 0;

    let minLen = Infinity;
    let startIndex = -1;


    while(right < n){
        if(hash[s[right]] > 0){
            count++;
        }

        hash[s[right]] = (hash[s[right]] || 0) -1;

        while(count === m){
            if((right-left + 1)< minLen){
                minLen = right - left + 1;
                startIndex = left;
            }

            hash[s[left]]++;

            if(hash[s[left]] > 0){
                count--;
            }
            left++;
        }
        right++;
    }

    return startIndex === -1 ? "" : s.substring(startIndex, startIndex + minLen);
};