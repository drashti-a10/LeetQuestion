class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if(s1.length()>s2.length()){
            return false;
        }
        int[] freq1 = new int[26];
        int freq2[] = new int[26];
        for(int i=0;i<s1.length();i++){
            freq1[s1.charAt(i) - 'a']++;
        }
        for(int i=0;i<s2.length();i++){
            int windowSize = s1.length();
            freq2[s2.charAt(i) - 'a']++;

            if(i>=windowSize){
            freq2[s2.charAt(i-windowSize) - 'a']--;
            }
            if(Arrays.equals(freq1, freq2)) {
                return true;
            }
        }
        return false;
    }
}