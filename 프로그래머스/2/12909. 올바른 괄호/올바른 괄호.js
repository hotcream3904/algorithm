function solution(s){
// - 여는 괄호를 만나면 count에 1을 더함

// - 닫는 괄호를 만나면 count에 1을 뺌 ( 단, count가 이미 0이라면 올바르지 않은 괄호 )

// - 최종적으로 모든 괄호를 체크했다면, count가 0인지 체크해서 여부판단
    var answer = true;
    let count = 0;
    for(let i=0; i<s.length; i++) {
     if(s[i] === "(" ) {
            count ++;
    } else if(count == 0) {
            return false;
    } else {    
        count -- ;  
    } 
    }
    
    count == 0 ? answer = true : answer = false
    
    

    return answer;
}