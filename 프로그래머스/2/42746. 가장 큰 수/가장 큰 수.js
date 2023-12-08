function solution(numbers) {
	let answer = ''
    answer = numbers.sort((a,b)=>(`${b}`+`${a}`)*1-(`${a}`+`${b}`)).join('')
	return answer[0] === '0' ? '0' : answer
}