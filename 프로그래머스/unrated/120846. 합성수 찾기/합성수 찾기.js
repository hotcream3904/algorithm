function solution(n) {
    var answer = 0;  
    for(let i=0; i<=n; i++) { 
        if( i > 3 &&  (i % 2 == 0 || i % 3 == 0 )) {
           answer ++;
          console.log(i)
        } else if ( i > 10 && (i % 7 == 0 || i % 5 == 0 )) {
            answer ++;
            console.log(i)
        }
    }
      
    return answer;
}