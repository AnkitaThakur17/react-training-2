//Object.keys method
const user = {name : "ankita", age:22, city:"Indore"}
console.log(Object.keys(user)) // o/p  ['name', 'age', 'city']

//Object.values 
console.log(Object.values(user)) // o/p ['ankita', 22, 'Indore']

//Object.entries
console.log(Object.entries(user)) // o/p [["name","Ankita"], ["age",22], ["city","Delhi"]]


//Object.assign method
let target = {name :"Ankita"}
let source = {age : 22, city : "Indore"}

Object.assign(target,source)
console.log(source) // o/p {age: 22, city: 'Indore}
console.log(target) //o/p {name: 'Ankita', age: 22, city: 'Indore'}

//clone using assign method
let obj = {a:1, b:2, c:3}

let clone = Object.assign({}, obj)
console.log(clone) // o/p {a:1, b:2, c:3}
console.log(obj) //o/p {a :1, b: 2, c: 3}

//override using assign
let obj1= {a:1, b:2, c:3}
let obj2 = {b:100, c:30}

let merged = Object.assign({}, obj1,obj2)
console.log(merged) //o/p {a:1, b: 100, c: 30}
console.log(obj1) //o/p {a: 1, b: 2, c: 3}
console.log(obj2) //o/p {b: 100, c: 30} 

//Object.freeze method
let car = {brand : "BMW"}
Object.freeze(car)
car.brand = "Alto"
console.log(car) //o/p {brand: 'BMW'} 

//Object.seal method
let animal = {name : "dog"}
Object.seal(animal)
animal.name = "cat"
animal.color = "balck"
console.log(animal) // o/p {name: 'cat'}

//Object.hasOwn method
const usr = {name : "ankita", age:22}
console.log(Object.hasOwn(user, "age")) // o/p true
console.log(Object.hasOwn(user,"salary")) // o/p false

//prototype example 
let animals = {
    sound: "Roar",
    makeSound: function() {
        console.log(this.sound);
    }
};

let tiger = Object.create(animals);

tiger.makeSound();  // "Roar"

//Create method in object
let flowers = {
    color: "white",
    flowerColor: function(){
        console.log(this.color)
    }
}
let lilly = Object.create(flowers)
lilly.flowerColor() // o/p  white , lilly doesn't have the flowerColor property, but prototype has it so it works
