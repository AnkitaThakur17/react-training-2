//push method
let arr = [10,20,30,40]
arr.push(90)
console.log(arr) // o/p [10,20,30,40,90]

//pop method
let arr2 = [50,60,70,100]
arr2.pop()
console.log(arr2) //o/p [50,60,70]

//shift
let arr3 = [70,75,85,80,65,92]
arr3.shift()
console.log(arr3) //[75,85,80,65,92]

//unshift
let arr4 = [1,2,3,4]
arr4.unshift(10)
console.log(arr4)

//splice 
let arr5 = [6,7,8,9]
arr5.splice(0,2,10,11) //splice(startindex,no.of items, item1 to insert, item2 to insert)
console.log(arr5) // o/p [10,11,8,9]

//sort string array
let str = ["apple","banana","kiwi","grapes"]
str.sort()
console.log(str) // o/p ["apple","banana","grapes","kiwi"]

//sort ascending order
let arr6 = [10,9,8,7,4,20]
arr6.sort((a,b)=>a-b)
console.log(arr6) // o/p [4,7,8,9,10,20]

//sort descending order
let arr7 = [10,9,8,7,4,20]
arr7.sort((a,b)=>b-a)
console.log(arr7) // o/p [20,10,9,8,7,4]

//reverse () method
let arr8 =[20,30,40,50,60]
arr8.reverse()
console.log(arr8) // o/p [60,50,40,30,20]

//map method
let arr9 =[2,3,4,5,6]
let result = arr9.map((num)=>num*2)
console.log(result) // o/p [4,6,8,10,12]
console.log(arr9) //o/p [2,3,4,5,6] original unchanged

//filter method
let arr10 = [1,2,3,4,5,6,7,8]
let result1 = arr10.filter((number)=>number%2===0)
console.log(result1)

//reduce method
let arr11 = [2,2,2,2]
let result2 = arr11.reduce((acc,nu)=>acc+nu, 0)
console.log(result2)

//forEach method
let arr12 = [1,2,34,56,7,5]
let result3 = arr12.forEach((n)=>{console.log(n)}) 
// o/p : 1 2 34 56 7 5

//slice method
let arr13 = [1,2,3,4,5,6]
let result4 = arr13.slice(1,4)
console.log(result4) //o/p [2,3,4]

//concat method
let ar = [1,2,3,4]
let ar1 = [5,6,7,8]
let con = ar.concat(ar1)
console.log(con) //o/p [1,2,3,4,5,6,7,8]

//every method
let nums = [2, 4, 6, 8];
let allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // true 

//some method
let numss = [1, 3, 5, 8];
let hasEven = numss.some(num => num % 2 === 0);
console.log(hasEven); // true

//filter
let fil =[1,3,5,7,9]
let res= fil.filter((r)=>r%2===0)
console.log(res)// o/p  empty array

