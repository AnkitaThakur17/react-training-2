//loops in JS
// Array loops
let arr = [1,2,3,4,5]
arr.forEach((ar)=> console.log(ar)) // doesn't return a new array, just iterate over the array 

// let str = "Ankita"
// str.forEach((st)=>console.log(st))  // doesn't works on string because its an array method. throws an error

let str2 = "Ankita";
[...str2].forEach((st)=>console.log(st)) // it may work like this if string is converted to array first

// let obj = {id:1,name:"ANkita"}
// obj.forEach((ob)=>console.log(ob)) //doesn't works on objects too

let obj = {id:1, name:"Ankita"}
Object.keys(obj).forEach((key)=>console.log(key)) // it works like this if obj used as array.

//map
let arr2 = [10,20,30,40,50]
let res = arr2.map((ar)=>ar*2) 
console.log(res) 

let str3 = "Good Morning";
let res2 = [...str3].map((st)=>st.toUpperCase()) //it may work like this only
console.log(res2)

let obj1 = {id:2,name : "ujjawal"}
let res3 = Object.keys(obj1).map((key)=>key.toUpperCase())
console.log(res3) // like this, it works o/p ['ID','NAME']

//filter
let arr3 = [2,3,4,5,6,7,8]
let res4 = arr3.filter((ar)=>ar%2===0)
console.log(res4) 

let str4 = "ankita"
let res5 = [...str4].filter((st)=>"aeiou".includes(st))
console.log(res5) //o/p ['a','i','a']

let obj2 = {id:1,name:"ANkita"}
let res6= Object.entries(obj2).filter(([key,value])=>typeof value === "number")
console.log(res6) // o/p  [ [ 'id', 1 ] ]

//for loop
let arr4 = [12,1,3,4,5,6,7,45]
for(let i =0; i<arr4.length; i++){
    console.log(arr4[i]) // totally wroks
}

let str5 = "Ankita"
for(let i = 0; i<str5.length; i++){
    console.log(str5[i]) // totally works
}

let obj3 = {id:1, name:"ankita"}
let keys = Object.keys(obj3)
for(i=0; i<keys.length; i++){
    console.log(keys[i]) // o/p id name (may work like this)
}

//for of loop
let arr5 = [12,34,56,78,90]
for(let num of arr5){
    console.log(num) // works
} 

//string 
const str = "Ankita";

// Let’s stop when we see 'k'
for (let char of str) {
  if (char === 'k') {
    console.log('Found k');
    break;
  }
  console.log(char); //o/p A n Found k
}

//for in loop
let arr6 = [12,34,56,78,90] 
for(let index in arr6){
    console.log(index,arr6[index]) // o/p 0 12 1 34 and so on..
}

//string
let str6= "Wednesday"
for(let i in str6){
    console.log(i,str6[i]) // o/p 0 W 1 e and so on ...
}

//object
let obj4 = {id:23, name:"an", city:"indore"}
for(let key in obj4){
    console.log(key,obj4[key]) //o/p id 23 name an city indore
} 

//prototype
let objects = {id:1,name:"ankita",city:"bhopal", salary : 5000,
    greet(){
        console.log("helo")
    }
}
console.log(objects)

let clone = objects;
clone.greet()
console.log(clone )


//create se
let object2 = {id:2, name:"ujjawal", city:"Indore", salary : 5000,
    greet(){
        console.log("good afternoon")
    }
}
console.log(object2)

//create
clonee=Object.create(object2)
console.log(clonee.id) // 2
console.log(clonee.salary) // 5000
clonee.place = "Gwalior" // {place: 'Gwalior'}
clonee.greet() // good afternoon
console.log(clonee) // gives a new object empty one , but above object's properties are still accessible.

//while loop
let z = 0;
while (z < 5) {
    console.log(z);
    z++;
}
// Check z < 5
// Agar true → code block chalega
// Fir z++ hogi
// Phir dobara condition check hogi
// Jab z == 5, condition false → loop ruk jayega

// Jab tak condition true hai, loop us block ko baar-baar chalata rahega.
// Condition check pehle hoti hai, phir block chalta hai.

//do while
// Condition check karne se pehle block ka code at least 1 baar chalta hai, chahe condition false hi kyu na ho.
let y = 10;
do {
  console.log(y);
  y++;
} while (y < 5); // 10 //Kyuki do { ... } wala block pehle execute hota hai, phir condition check hoti hai.

//2nd example
let g= 20;
do{
    console.log(g)
    g++
}while(g<25)  // 20 21 22 23 24

// switch case
let day = 5; //Jab fixed options ho (numbers, strings) we can use switch. Multiple cases stacked → Easy in switch-case.

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day number'); // Friday
}