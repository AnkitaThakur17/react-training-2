//string methods
//searching / checking

//includes method
let str = "Indore is in MP"
let res = str.includes("is")
console.log(res) // o/p true 

//index of method
let str2 = "Hi Iam Ankita Thakur"
let res1 = str2.indexOf("T")
console.log(res1) // o/p 14

//start search from a particular index
let str3 = "Its Friday Today"
let res2 = str3.indexOf("To",10)
console.log(res2) //o/p 11

//lastIndexOf method
let str4 = "Saturday is Tomorrow"
let res3 = str4.lastIndexOf("r")
console.log(res3) // o/p 17

// search from particular index
let str5 ="Banana"
let res4= str5.lastIndexOf("a",2)
console.log(res4) // o/p 1

//startsWith 
let str6 = "This is Indore"
console.log(str6.startsWith("This")) //o/p True

//endsWith
let str7 = "Today is Friday"
console.log(str7.endsWith("y")) // true

//with length
let str8 = "its bank holiday"
console.log(str8.endsWith("bank",8)) // true

//Extracting parts methods
//slice 
let str9 = "Its raining today"
console.log(str9.slice(0,4)) //o/p Its

//negative index
let str10 = "Its monsoon going on"
console.log(str10.slice(-1)) // o/p n

//substring method
let str11 = "its raining outside"
console.log(str11.substring(0,8)) //o/p its rain

//negative index
let str12 = "today is friday"
console.log(str12.substring(-1,5)) //o/p today

//start > end
let str13 = "rain has been started"
console.log(str13.substring(7,3)) // swap the values so o/p n ha

//Modifying
// toUpperCase
let str14 = "iam ankita thakur"
console.log(str14.toUpperCase()) // o/p upper case string

//tolowerCase
let str15 = "IAM ANKITA THAKUR"
console.log(str15.toLowerCase()) // o/p lowercase string

//to make a specific word to upper/lower case
let str16 = "ankita";

// first char uppercase + baaki same
let result = str16[0].toUpperCase() + str16 .slice(1);
console.log(result); // "Ankita"

//trim
let str17 = " Hello World! ";
console.log(str17.trim());   // "Hello World!"

//replace
let str18 = "Its raining today"
console.log(str18.replace("raining","sunny")) // o/p its sunny today

//replace all 
let str19 = "twinkle twinkle little star"
console.log(str19.replaceAll("twinkle","periwinkle")) // periwinkle periwinkle little star

//split method
let str20 = "Iam Ankita Thakur"
console.log(str20.split(" ")) // o/p  ['Iam', 'Ankita', 'Thakur']
console.log(str20.split()) // o/p  ['Iam Ankita Thakur']
console.log(str20.split("")) // o/p ['I', 'a', 'm', ' ', 'A', 'n', 'k', 'i', 't', 'a', ' ', 'T', 'h', 'a', 'k', 'u', 'r']

//concat method
let str21 = "Hello "
let str22 = "Good morning"
let res5 = str21.concat(str22)
console.log(res5) //o/p Hello Good morning

//repeat 
let str23 = "ha! "
console.log(str23.repeat(5)) // o/p ha! ha! ha! ha! ha! 