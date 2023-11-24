function solution(strings, n) {
  let answer = [];
  

  for(let i=0; i<strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
    // sun = 
  }
  
  console.log(strings);
  
  return answer;
}


solution(['sun', 'bed', 'car'], 1);

 