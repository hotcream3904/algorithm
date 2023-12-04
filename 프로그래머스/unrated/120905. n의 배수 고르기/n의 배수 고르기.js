function solution(n, numlist) {
    var answer = [];
    //numlist.reduce((prev,curr)=>  ,0)
    for(let i = 0; i<numlist.length; i++) {
        if(numlist[i] % n == 0) {
            answer.push(numlist[i])
        }
    }
    return answer;
}