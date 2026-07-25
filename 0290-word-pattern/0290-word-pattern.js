/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    if(pattern.length !== words.length){
        return false;
    }

    let mapPattern = new Map();
    let mapWord = new Map();

    for(let i = 0; i < pattern.length; i++){

        let ch = pattern[i];
        let word = words[i];

        if(mapPattern.has(ch)){

            if(mapPattern.get(ch) !== word){
                return false;
            }

        }else{

            mapPattern.set(ch, word);
        }

        if(mapWord.has(word)){

            if(mapWord.get(word) !== ch){
                return false;
            }

        }else{

            mapWord.set(word, ch);
        }

    }

    return true;
};