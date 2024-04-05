import java.util.ArrayList;

class Solution {
    public int[] solution(int[] num_list, int n) {
        ArrayList<Integer> newArr = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            newArr.add(num_list[i]);
        }
        
        int[] result = new int[newArr.size()];
        for(int i = 0; i < result.length; i++) {
            result[i] = newArr.get(i);
        }
        
        return result;
    }
}