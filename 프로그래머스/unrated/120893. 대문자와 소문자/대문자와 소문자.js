function solution(my_string) {
    var answer = '';
    for(let i = 0; i<my_string.length; i++) {
        if(my_string.charAt(i).toUpperCase() === my_string.charAt(i)) {
          answer +=  my_string.charAt(i).toLowerCase();            
        } else { 
        answer += my_string.charAt(i).toUpperCase();
        }
    }

    return answer;
}

