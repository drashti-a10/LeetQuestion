class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        if(n == 0 || k==0) return new int[0];
        Deque<Integer> dq = new LinkedList<>();
        int[] result = new int[n - k+1];
        int index=0;
        for(int i=0; i<n; i++){

            while(!dq.isEmpty() && dq.peek()<=i-k){
                dq.poll();
            }
            while(!dq.isEmpty() && nums[dq.peekLast()] < nums[i]){
                dq.pollLast();
            }
            dq.offer(i);
            if(i >=k-1 ){
                result[index++] = nums[dq.peek()];
            }
        }
        return result;
    }
}
