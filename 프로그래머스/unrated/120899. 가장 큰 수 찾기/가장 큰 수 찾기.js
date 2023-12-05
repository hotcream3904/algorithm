function solution(array) {
    var answer = [];
    
    // 배열을 정렬
    let sortedArray = array.slice().sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let maxNum = sortedArray[sortedArray.length - 1];
        if (array[i] === maxNum) {
            answer.push(maxNum, i);
        }
    }

    return answer;
}