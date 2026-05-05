/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let map = {};

    for(let str of s){
        map[str] = (map[str] || 0)+1;
    }

    for(let str of t){
        if(!map[str]) return false;
        map[str]--;
    }

    return true;
};