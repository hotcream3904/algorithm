function solution(my_string) {
    var answer = '';
    let lowerStr = my_string.toLowerCase();
    answer = lowerStr.split('').sort().join('')
    return answer;
}