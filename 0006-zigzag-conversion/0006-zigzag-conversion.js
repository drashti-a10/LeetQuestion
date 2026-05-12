/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let row = new Array(numRows).fill("");
    if(numRows === 1 || s.length<= numRows){
        return s;
    } 
    let direction = -1;
    let curRow = 0;
    for(let i = 0 ; i< s.length ; i++){
        row[curRow] += s[i];

        if(curRow === 0 || curRow === numRows - 1){
            direction = direction * -1;
        }

        curRow = curRow + direction;
    }
    return row.join("");
};