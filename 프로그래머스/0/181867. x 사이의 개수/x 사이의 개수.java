class Solution {
    public int[] solution(String myString) {
        String[] splitArray = myString.split("x", -1);
        int[] answer = new int[splitArray.length];

        for (int i = 0; i < splitArray.length; i++) {
            answer[i] = splitArray[i].length();
        }

        return answer;
    }
}