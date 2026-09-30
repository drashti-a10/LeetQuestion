/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];

    let board = [];

    for(let i=0; i<n; i++){
        board.push(new Array(n).fill('.'));
    }

    function isSafe(board, row, col, n){
        for(let j=0; j<n; j++){
            if(board[row][j] === 'Q'){
                return false;
            }
        }

        for(let j=0; j<n; j++){
            if(board[j][col] === 'Q'){
                return false;
            }
        }

        for(let i=row, j=col; i>=0 && j >=0; i--,j--){
            if(board[i][j] === 'Q'){
                return false;
            }
        }

        for(let i = row, j=col; i>=0 && j<n; i--, j++){
            if(board[i][j] === 'Q'){
                return false;
            }
        }
        return true;
    }

    function nQueens(board, row, n){
        if(row === n){
            let solution = board.map(row => row.join(''));
            ans.push(solution);
            return;
        }

        for(let j=0; j<n; j++){
            if(isSafe(board, row, j, n)){
                board[row][j] = 'Q';
                nQueens(board, row+1, n);
                board[row][j] = '.';
            }
        }
    }

    nQueens(board, 0, n);
    return ans;

};