function solution(numlist, n) {
   numlist.sort((a,b)=>
                Math.abs((n-a))-Math.abs((n-b))
               );
    
   for(let i = 0 ; i<numlist.length-1; i++) {
       if (Math.abs(n-numlist[i]) == Math.abs(n-numlist[i+1])) {
         let temp = [numlist[i],numlist[i+1]]
        temp.sort((a,b)=>b-a)
          numlist[i] = temp[0]
          numlist[i+1] = temp[1]
       }
   }
               
    return numlist
}

