function solution(n, t) {
    var answer = 1;
    // n=2 t=1  2*2
    // t=2 (2*2)*2
    // t=3 (2*2*2)*2
    // t=4 (2*2*2*2)*2
    
    // n=7 t=1 7*2
    // 7*2*2 
    
    answer = n * ( 2 ** t)
    
    return answer;
}