function solution(citations) {
    var answer = 0;
    let ranking = 0;
    citations.sort((a,b)=>b-a)
    for(let i=0; i<citations.length; i++) {
        ranking ++;
        if(citations[i] < ranking) {
            ranking--;
            break;
        }
        
    }
    return ranking;
}

