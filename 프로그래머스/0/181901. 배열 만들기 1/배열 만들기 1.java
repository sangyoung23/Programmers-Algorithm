import java.util.*;

class Solution {
    public List<Integer> solution(int n, int k) {
        List<Integer> newArr = new ArrayList<>();
        
        for (int i = 1; i*k <= n; i++) {
            newArr.add(i*k);
        }
        
        return newArr;
        
    }
}