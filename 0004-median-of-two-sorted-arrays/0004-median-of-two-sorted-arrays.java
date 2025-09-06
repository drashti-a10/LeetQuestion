class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        int[] merged = new int[m+n];
        int i=0; int j=0; int k=0;
        while(i<m&&j<n){
            if(nums1[i]<=nums2[j]){
                merged[k++]=nums1[i++];
            }else{
                merged[k++]=nums2[j++];
            }
        }
        while(i<m){
            merged[k++]=nums1[i++];
        }
        while(j<n){
            merged[k++]=nums2[j++];
        }
        int mid = merged.length/2;
        if(merged.length%2==0){
            return (merged[mid-1]+merged[mid])/2.0;
        }else{
            return merged[mid];
        }
    }
}