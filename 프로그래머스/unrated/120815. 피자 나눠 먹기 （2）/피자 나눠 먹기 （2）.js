function solution(n) {
    var answer = 0;
   
// n = 1   i = 1
// n = 2.  i = 1
// n = 3.  i = 1
// n = 4.  i = 2
// n = 5.  i = 5
// n = 6.  i = 1
// n = 7.  i = 7
// n = 8.  i = 5
    
    
    for(let i=1; i<n+1; i++) {
        if (((6 * i) % n) == 0) {
            answer = i
            break;
        }
    }
    return answer;
}