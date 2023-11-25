function solution(str1, str2) {
    let answer = 0;
    if(str1.split(str2) == str1) {
        answer = 2
    } else {
        answer = 1
    }
    return answer;
}