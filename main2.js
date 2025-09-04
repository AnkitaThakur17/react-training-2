// string .includes method
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); 

// string .startsWith method
let text2 = "Hello world, welcome to the universe.";
console.log(text2.startsWith("Hello"))

//string .endsWith method
let text3 = "Iam ankita"
console.log(text3.endsWith("ankita"))

//Array find method

//find 1st number > 30
const numbers = [10,20,30,40,50]
const result = numbers.find(num => num > 30)
console.log(result)

//find in object array
const users = [
    {id:1, name:"Ankita"},
    {id:2, name:"Ujjawal"},
    {id:3, name:"Rahul"}
]
const user = users.find(u=> u.name === "Ankita")
console.log(user)

//Array findIndex() method

//findIndex 1st no. < 30
const numbers2 = [10,20,30,40,50]
const result2 = numbers2.findIndex(n => n < 30)
console.log(result2)

//findIndex in object
const animals = [
    {id:1, name:"Dog"},
    {id:2, name:"Cat"},
    {id:3, name:"Deer"}
]
const animal = animals.findIndex(a => a.name === "Deer")
console.log(animal)

