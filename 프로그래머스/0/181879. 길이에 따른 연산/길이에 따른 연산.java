class Solution {
    public int solution(int[] num_list) {
        int result;
        if (num_list.length >= 11) {
            int sum = 0;
            for (int i = 0; i < num_list.length; i++) {
                sum += num_list[i];
            }
            result = sum;
        } else {
            int product = 1;
            for (int i = 0; i < num_list.length; i++) {
                product *= num_list[i];
            }
            result = product;
        }
        return result;
    }
}
