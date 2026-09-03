/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let token of tokens){
        if(token === '+' || token === '*' || token === '-' || token === '/'){
             let b = stack.pop();
            let a = stack.pop();
           

            let res;
            if(token === '+'){
            res = a+b;
            }

            if(token === '*'){
            res = a*b;
            }

            if(token === '-'){
            res = a-b;
            }

            if(token === '/'){
            res = Math.trunc(a/b);
            }
            stack.push(res);
            }
        else{
            stack.push(Number(token));
        }
        
    }
    
    return stack[0];
};