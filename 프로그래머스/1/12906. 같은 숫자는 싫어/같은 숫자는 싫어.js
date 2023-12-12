function solution(arr) {
    
//     for(var i = 1;i < arr.length; i++){
//         if(now !== arr[i]){
//             now = arr[i];
//             answer.push(now);
//         }
//     }
    
  let answer = arr.filter((item, index) => item != arr[index+1]);
    

    return answer;
}