function solution(progresses, speeds) {
    var answer = [];
    let deploymentDay = [];
    for(let i = 0; i<progresses.length; i++) {
        deploymentDay.push( Math.ceil((100-progresses[i])/speeds[i]) )
    }
    
    console.log(deploymentDay)
    
    let maxNum = deploymentDay[0] 
    let day = 0;   
    for(let i = 0; i<deploymentDay.length; i++) {
        if(maxNum < deploymentDay[i+1] ) {
            maxNum = deploymentDay[i+1]
            day ++;
            answer.push(day)
            day = 0;
        } else {
            day ++;
        }
    }
       answer.push(day)
    return answer;
}



