function solution(array) {
    var answer = 0;
    array.sort(function(a, b)  {
  return a - b;
})
    let middleNum = Math.ceil(array.length / 2) - 1
    answer = array[middleNum]
    return answer;
}