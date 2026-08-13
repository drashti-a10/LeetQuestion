/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let stringStack = [];
    let k=0;

    for(let ch of s){
        if(ch >= '0' && ch <= '9'){
            k = (k*10) + Number(ch);
            continue;
        }

        if(ch === '['){
            numStack.push(k);
            k = 0;
            stringStack.push(ch);
            continue;
        }

        if(ch !== ']'){
            stringStack.push(ch);
            continue;
        }

        let temp = "";
        while(stringStack[stringStack.length - 1]!== "["){
            temp = stringStack.pop() + temp;
        }

        stringStack.pop();
        let count = numStack.pop();

        let replacement = "";

        for(let i=0; i<count; i++){
            replacement += temp;
        }

        stringStack.push(replacement);
    }

    let result = "";
    while(stringStack.length > 0){
        result = stringStack.pop() + result;
    }
    
    return result;
};