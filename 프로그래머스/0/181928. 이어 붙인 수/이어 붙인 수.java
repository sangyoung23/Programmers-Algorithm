import java.util.*;

class Solution {
    public int solution(int[] num_list) {
        List<Integer> oddArr = new ArrayList<>();
        List<Integer> evenArr = new ArrayList<>();

        for(int num : num_list) {
            if (num % 2 != 0) {
                oddArr.add(num);
            } else {
                evenArr.add(num);
            }
        }

        StringBuffer oddSb = new StringBuffer();
        StringBuffer evenSb = new StringBuffer();

        for(int num : oddArr) {
            oddSb.append(num);
        }

        for(int num : evenArr) {
            evenSb.append(num);
        }

        int oddNumber = Integer.parseInt(oddSb.toString());
        int evenNumber = Integer.parseInt(evenSb.toString());

        return oddNumber + evenNumber;
    }
}