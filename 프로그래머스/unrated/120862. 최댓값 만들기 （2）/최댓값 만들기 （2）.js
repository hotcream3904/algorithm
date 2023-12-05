function solution(numbers) {
    var answer = 0
    let newNum = [];
    for(let i=0; i<numbers.length; i++) {
        for(let j=0; j<numbers.length; j++) {
            if(i != j) {
            newNum.push(numbers[i] * numbers[j])
            }
        }
    }
    console.log(newNum)
    newNum = newNum.sort((a,b)=>a-b)
    answer = newNum[newNum.length-1]
    return answer;
}