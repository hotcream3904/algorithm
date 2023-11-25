class Solution {
    public int solution(int slice, int n) {
        int pizza = 1;
        for(int i=1; i<n; i++){
        if(i%slice ==0){
        pizza++;
       }
      }
   	return pizza;
    }
}