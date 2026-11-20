/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let visited = Array.from({ length: n }, () => new Array(m).fill(false));
    let queue = [];
    let ans = 0;

    for(let i=0; i<n ; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === 2){
                queue.push([i,j,0]);
                visited[i][j] = true;
            }
        }
    }

    let front =0;

    while(front < queue.length){
        let[i,j,time] = queue[front++];

        ans = Math.max(ans, time);

        if(i-1>=0 && !visited[i-1][j] && grid[i-1][j]=== 1){
            queue.push([i-1,j,time+1]);
            visited[i-1][j] = true;
        }

        if(j+1<m && !visited[i][j+1] && grid[i][j+1]=== 1){
            queue.push([i,j+1,time+1]);
            visited[i][j+1] = true;
        }

        if(i+1<n && !visited[i+1][j] && grid[i+1][j]=== 1){
            queue.push([i+1,j, time+1]);
            visited[i+1][j] = true;
        }

        if(j-1>=0 && !visited[i][j-1] && grid[i][j-1]=== 1){
            queue.push([i,j-1, time+1]);
            visited[i][j-1] = true;
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === 1 && !visited[i][j]){
                return -1;
            }
        }
    }
return ans;
    
};