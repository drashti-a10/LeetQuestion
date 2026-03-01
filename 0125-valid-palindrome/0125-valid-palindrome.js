/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left<right){
        while(left<right && !alphaNumeric(s[left])){
        left ++;
        }
        while(left<right && !alphaNumeric(s[right])){
        right--;
        }
        if(s[left].toLowerCase()!== s[right].toLowerCase()){
        return false;
        }
        left++;
        right--;

    }
    return true;
};

function alphaNumeric(ch){
    return(
         (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    );
}