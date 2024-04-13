class Solution {
    public int solution(String str1, String str2) {
        int result;
        if (str2.contains(str1)) {
            result = 1;
        } else {
            result = 0;
        }
        
        return result;
    }
}