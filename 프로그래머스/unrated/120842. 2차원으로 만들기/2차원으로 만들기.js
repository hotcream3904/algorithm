function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
        console.log(num_list)
        console.log(answer)
    }

    return answer;
}