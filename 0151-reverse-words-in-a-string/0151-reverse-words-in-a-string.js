/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s= s.split("").reverse().join("");

    let ans= "";
    let n = s.length;

    for(let i = 0; i<n; i++){
        let word = "";
        while(i<n && s[i]!== ' '){
            word += s[i];
            i++;
        }

        word = word.split("").reverse().join("");

        if(word.length > 0){
            if(ans.length > 0){
                ans += " ";
            }

            ans = ans + word;
        }
    }

    return ans;
};