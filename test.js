// checkDuplicate();


// function checkDuplicate(element, index) {
//    let array = ["abc","xy", "abc", "xy", "y"];

//    let arr = array.sort()

//    for(let i = 0; i < arr.length;i++) {
//       // nested loop
//       for(let j = 0; j < arr.length;j++) {
//          // do not compare same elements
//          if(i !== j) {
//            // check if elements match
//      if(arr[i] === arr[j]){
//               // duplicate element found
//         // console.log(arr[i]);
//      } else {
//          console.log(arr[i]);
//      }
//          }
//       }
//    terminate outer loop
//    }
// }


// function simpleArraySum(ar) {
  /*
   * Write your code here.
   *@params
   *
   *
      */
//     let elCub = 0
//     ar.map((ele =>  {
//        elCub += ele

//     }))
//     console.log(elCub);

// }

// simpleArraySum([1, 2, 3, 4, 10, 11])

// Complete the compareTriplets function below.

// Complete the compareTriplets function below.
// function compareTriplets(a, b) {
//     let arrTotal = [0,0]
//     a[0] > b[0] ? arrTotal[0] += 1 : a[0] === b[0] ? null : arrTotal[1] +=1;
//     a[1] === b[1]  ? null: a[1] > b[1] ? arrTotal[0] += 1 : arrTotal[1] +=1
//     a[2] > b[2] ? arrTotal[0] += 1 : a[2] === b[2] ? null : arrTotal[1] +=1;
//  console.log(arrTotal);

// }
// compareTriplets([9, 18, 10],[99, 16, 80])

// function diagonalDifference(arr) {
//     let n = arr.length;
//     let d1 = 0;
//     let d2 = 0;
//   for(let i=0; i<n; i++){
//      for(let j=0; j<n; j++){
//        // finding the sum of primary diagonal
//          if(i === j) {
//             //  console.log(arr[i][j]);
//            d1 += arr[i][j];
//          }
//        // finding the sum of secondary diagonal
//          if(i + j === n - 1){
//             d2 += arr[i][j];
//          }
//       }
//   }
//     // Write your code here
//     return Math.abs(d1 - d2);
// }
// diagonalDifference(
//     [
//         [11, 2, 4],
//         [4, 5, 6],
//         [10, 8, -12]
//     ]
// )

//TODO
// function plusMinus(arr) {
//     let n = arr.length
//     let positive = 0;
//     let negative = 0;
//     let zero = 0
//     for(let i =0; i < n; i++) {
//         if(arr[i] === 0 ) {
//             zero +=1
//         }
//         if(arr[i] > 0) {
//             positive += 1
//         }
//         if(arr[i] < 0) {
//             negative += 1
//         }
//     }
// console.log((positive/ n).toFixed(6));
// console.log((negative/n).toFixed(6));
// console.log((zero/n).toFixed(6));
// }
// plusMinus([-4, 3, -9, 0, 4, 1])

// Complete the staircase function below.
// function staircase(n) {
//     let space = " ".repeat(n)
//     let stairs = "#"
//     for(let i = 1; i <= n; i ++) {
//        space += space.split(" ").pop()
//         console.log(space.repeat(n-1) + stairs.repeat(i));
//     }
// }

// function staircase(n) {
//     var output = '';
//     for(var i =1; i <= n; i++) {
//         for(var j = n-1; j >= i; j--) {
//                output += " ";
//         }
//         for(var k = 1; k <= i; k++) {
//             output += "#";
//             // console.log(output);
//         }
//         output += "\n";
//     }
//     console.log(output);
// }
// staircase(7);



// Complete the miniMaxSum function below.
// function miniMaxSum(arr) {
//     let sortedArr = arr.sort((a,b)=>a - b);
//     console.log(sortedArr);
//     let outputMin = 0;
//     let outputMax = 0;
//      sortedArr.map((value, i) => {
//         if(i !== 0){
//             outputMin +=value
//         }
//         if(i !== sortedArr.length -1) {
//             outputMax += value
//         }
//     })
//     console.log(outputMin);
//     console.log(outputMax);
//     console.log(`${outputMax} ${outputMin}`)
// }
// miniMaxSum([1, 2, 3, 4, 5]);





// function birthdayCakeCandles(candles) {
//     let sortedCan = candles.sort((a,b) => a - b)
//     let array = []
//     for(let i = 0; i < sortedCan.length; i++) {
//         let present = sortedCan[i]
//         let next = sortedCan[i+1]
//         if(present < next){
//             console.log(next);
//         }
//         return array.length

//     }
// }

// birthdayCakeCandles([3,3,4,5,1])

// var twoSum = function(nums, target) {
//   for(let i =0; i < nums.length; i++){
//   }
//   console.log(numbers);
// };
// twoSum([3,2,3], 9)
// [
//   [
//     1,2,3,4
//   ],
//   [
//     2,4,5,6
//   ]
// ]

// const arr = [1, 2, 3, 4, 5, 6]
// setInterval(() => {
//   arr.map(item => {
//     console.log(item);
//   })
// }, 1000);


// function smallestInteger(arr) {
//   // Write your code here
//   const min = Math.min(...arr)
//   console.log(min);
// }
// smallestInteger([1,2,3,4,4,5,6,7])

// function findTrend(arr) {
//   // Write your code here
//   let trendArr = null
//   for (let i = 0; i < arr.length; i++) {
//     let prev = arr[i - 1]
//     let present = arr[i]
//     let next = arr[i + 1]
//     if (prev > present && present > next) {
//       trendArr = [false, true, arr.indexOf(prev)]
//       break
//     } else if (prev < present && present < next) {
//       trendArr = [true, false, arr.indexOf(prev)]
//       break
//     } else if(!(prev < present && present < next))  {
//       trendArr = [false, false, -1]
//       // break
//     }
//   }
//   console.log(trendArr);
//   return trendArr
// }
// findTrend([14, 3, 3, 19, 18, 12, 7, 18, 22, 32, 20, 11, 8, 5])
// false,
// true,
// newArr.indexOf(next)
// findTrend([8,15,11,21,5,10,11,18,5])
// true
// false
// 3


// findTrend([4,10,10,10, 32])

// false
// false
// -1

// findTrend([3,32,12,15])
// 3
// 32
// 12
// 15

// false
// false
// -1
function result_expression(expression, variables) {
  let expr = expression.split(" ");
  const reverseExp = expr.reverse()
  let stack =[];
  const letters = /^[A-Za-z]+$/;

  for(let i=0; i<reverseExp.length; i++) {
    if(!isNaN(reverseExp[i]) && isFinite(reverseExp[i])) {
      stack.push(reverseExp[i]);

    }
    else if(isNaN(reverseExp[i] && reverseExp[i].match(letters))){
         stack.push(variables[reverseExp[i]]);
        
    }
    else if( reverseExp[i] === "") {
         stack.push(0);
    }
    else {
      let a = stack.pop();
      let b = stack.pop();
      if(reverseExp[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if(reverseExp[i] === "-") {
          stack.push(parseInt(b) - parseInt(a));
        } else if(reverseExp[i] === "*") {
            stack.push(parseInt(a) * parseInt(b));
        } else if(reverseExp[i] === "/") {
            stack.push(parseInt(b) / parseInt(a));
        } else if(reverseExp[i] === "^") {
            stack.push(Math.pow(parseInt(b), parseInt(a)));
        }
    }
  }

  if(stack.length > 1) {
      console.log(stack)
    return "ERROR";
  }else {
    return stack[0];
  }

}
console.log(result_expression('1 3 5 x * -', {"x": 2}));  // Result: -14