class Solution {
    public int solution(String myString, String pat) {
        String newMySTring = myString.toUpperCase();
        String newPat = pat.toUpperCase();
        
        if (newMySTring.contains(newPat)) {
            return 1;
        } else {
            return 0;
        }
    }
}