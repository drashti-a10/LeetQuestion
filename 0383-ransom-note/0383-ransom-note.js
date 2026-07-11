/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(let ch of magazine){
        map.set(ch, (map.get(ch)  || 0)+1);
    }

    for(let ch of ransomNote){
        if(!map.has(ch) || map.get(ch)=== 0){
            return false;
        }
        map.set(ch, map.get(ch)-1);
    }
    return true;
};