/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let island = 0;
    let visited = Array.from({length: n}, () => new Array(m).fill(false));

    function dfs(i,j){
        if(i<0 || j<0 || i>=n || j>=m || visited[i][j] || grid[i][j] !== "1"){
            return;
        }

        visited[i][j] = true;
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i+1, j);
        dfs(i, j-1);
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === "1" && !visited[i][j]){
                island ++;
                dfs(i,j);
            }
        }
    }
    return island;
};