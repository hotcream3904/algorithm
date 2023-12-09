function solution(order) {
    var answer = 0;
    let strOrder = order.toString()
    for(let i = 0; i<strOrder.length; i++) {
        if(strOrder[i] == 3 || strOrder[i] == 6 || strOrder[i] == 9) {
            answer ++
        }
    }
    return answer;
}