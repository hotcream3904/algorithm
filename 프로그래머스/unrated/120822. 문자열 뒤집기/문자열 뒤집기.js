function solution(my_string) {
    //정답 변수
    var answer = '';
    let answerArr = [];
    //문자열을 배열로 변환
    answerArr = my_string.split('')
    //배열을 거꾸로 뒤집음
    let answerArr2 = answerArr.reverse()
    //거꾸로 뒤집은 배열을 다시 문자열로
    answer = answerArr2.join('')
    return answer;
}