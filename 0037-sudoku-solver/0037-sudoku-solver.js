/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function solve(board){
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[0].length; j++){
                if(board[i][j] === '.'){
                    for(let c=1; c<=9; c++){
                        let char = String(c);
                        if(isValid(board, i, j, char)){
                            board[i][j] = char;

                            if(solve(board) === true){
                                return true;
                            }else{
                                board[i][j] = '.'
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function isValid(board, row, col, c){
        for(let i=0; i<9; i++){
            if(board[i][col] === c){
                return false;
            }

            if(board[row][i] === c){
                return false;
            }

            if(board[3*Math.floor(row / 3) + Math.floor(i/3)]
            [3*Math.floor(col/3) + (i%3)] === c){
                return false;
            }
        }
        return true;
    }
    solve(board);
};