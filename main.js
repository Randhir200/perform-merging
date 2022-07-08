function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr1 = input[1].trim().split(" ").map(Number); 
    let arr2 = input[2].trim().split(" ").map(Number); 
    let ans = [];
    let p1 = 0;
    let p2 = 0;
    merge(arr1,arr2,p1,p2)
    console.log(ans.join(" "))
    function merge(arr1,arr2,p1,p2){
         while(p1<arr1.length&&p2<arr2.length){ 
            if(arr1[p1]<=arr2[p2]){
                ans.push(arr1[p1])
                p1++
            }else{
                ans.push(arr2[p2])
                p2++
            }
         }
          if(p1<arr1.length){
              for(let i=p1;i<arr1.length;i++){
                  ans.push(arr1[i])
              }
          }
          
          if(p2<arr2.length){
              for(let i=p2;i<arr2.length;i++){
                  ans.push(arr2[i])
              }
          }
 
      
     }
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 
 