// 01 - Fruits
// const fruits = ["mango","lemon","blueberry"]
// console.log(fruits)
// console.table(fruits)

// 02 - Access
// const ingredients = ["eggs","milk","butter"]
// console.log(ingredients[ingredients.indexOf("milk")])

// 03 - Add and Remove
// const objects = ["pen","book","lamp"]
// console.log(objects)
// objects.unshift("chair")
// console.log(objects)
// objects.pop()
// console.log(objects)
// objects.push("laptop")
// console.log(objects)
// objects.shift()
// console.log(objects)

// 04 - Order
// const numbers = [4, 10, 8, 12, 6]
// numbers.reverse()
// console.log(numbers)

// 05 - Boucle
// let total = 0
// const limit = 10

// for (let i = 0; i <= limit; i += 1){
//     total += i
// }
// console.log(total)

// 06 - Reverse
// const sentence = "Hello Konexio !"
// let reverdedSentence = ""
// for (i=0; i <= sentence.length; i += 1){
//     reverdedSentence = reverdedSentence.concat(sentence.charAt(sentence.length - i))
// }
// console.log(reverdedSentence)

// 07 - Fizzbuzz
// for (let i = 0; i <= 100; i++){
//     if (i % 3 === 0){
//         if (i % 5 === 0){
//             console.log("fizzbuzz")
//         }
//         else {
//             console.log("fizz")
//         }
//     }
//     else if (i % 5 === 0){
//         console.log("buzz")
//     }
//     else {
//         console.log (i)
//     }
// }

// 08 - While
// let total = 0
// const limit = 10
// let i = 0

// while (i < limit){
//     i += 1
//     total += i
// }
// console.log(total)

// 09 - Sans boucle
const students = ["mago","aurélien","arthur","jad","clara","danh","edaly","emad","florent","florez","julien","lynda","rayan","dushen","walid1","cinnie","lucas","thomas","wade","walid2"]
let random = Math.ceil(Math.random() * students.length)
indexRandom = random -1
console.log(students[indexRandom])


