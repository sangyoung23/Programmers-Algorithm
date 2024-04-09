class Solution {
    public String solution(String[] str_list, String ex) {
        StringBuilder result = new StringBuilder();
        
        for (String list : str_list) {
            if (!list.contains(ex)) {
                result.append(list);
            }
        }
        
        return result.toString();
    }
}