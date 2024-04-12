class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int result = 0;
        if (arr1.length > arr2.length) {
            result += 1;
        } else if (arr1.length < arr2.length) {
            result += -1;
        } else if (arr1.length == arr2.length) {
            int sum1 = 0;
            int sum2 = 0;
            for(int i = 0; i < arr1.length; i++) {
                for (int j = 0; j < arr2.length; j++) {
                    sum1 += arr1[i];
                    sum2 += arr2[j];
                }
            }
            if (sum1 > sum2) {
                result += 1; 
            } else if (sum1 < sum2) {
                result += -1;
            }
            result += 0;
        }
        return result;
    }
}