function solution(array, commands) {
    var answer = [];
    let newArray = [];
    
    for(let i =0; i<commands.length; i++) {
        for(let j=0; j<3; j++) {
           newArray = array.slice(commands[i][0]-1,commands[i][1])
           newArray.sort((a,b)=>a-b)
        }
        answer.push(newArray[commands[i][2]-1])
    }


    return answer;
}