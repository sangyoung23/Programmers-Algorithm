class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String stringAb = Integer.toString(a) + Integer.toString(b);
        if (Integer.parseInt(stringAb) > 2 * a * b) {
            return Integer.parseInt(stringAb);
        }
        return 2 * a * b;
    }
}