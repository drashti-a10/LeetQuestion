/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    let n = grid.length;

    function isValid(grid, r, c, n, expVal){

        if(r<0 || c<0 || r>=n || c>=n || grid[r][c] !== expVal){
            return false;
        }

        if(expVal === n*n-1){
            return true;
        }

        let ans1 = isValid(grid, r-2, c+1, n , expVal+1);
        let ans2 = isValid(grid, r - 1, c + 2, n, expVal + 1);
        let ans3 = isValid(grid, r + 1, c + 2, n, expVal + 1);
        let ans4 = isValid(grid, r + 2, c + 1, n, expVal + 1);
        let ans5 = isValid(grid, r + 2, c - 1, n, expVal + 1);
        let ans6 = isValid(grid, r + 1, c - 2, n, expVal + 1);
        let ans7 = isValid(grid, r - 1, c - 2, n, expVal + 1);
        let ans8 = isValid(grid, r - 2, c - 1, n, expVal + 1);

        return ans1 || ans2 || ans3 || ans4 ||
               ans5 || ans6 || ans7 || ans8;
    }
    return isValid(grid,0,0,n,0);
};