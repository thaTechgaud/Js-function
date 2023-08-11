// const users = ["Dayo", "Patience", "Gift", "Flourish", "Peter", "Claudia"]
// // console.log(users[4])
// for (let i = 0; i < users.length; i+= 1) {
//     console.log(`user ${users[i]} is at index ${i} in the users array`)
// }

// const usersDetails = [
//     {
//         name: "Bola",
//         age: 19,
//         gender: "Female"
//     },
//     {
//         name: "Tiwalola",
//         age: 22,
//         gender: "Female"
//     },
//     {
//         name: "Israel",
//         age: 25,
//         gender: "Male"
//     },
//     {
//         name: "James",
//         age: 21,
//         gender: "Male"
//     }
// ]
// //  console.log(usersDetails[0])
// for (let i = 0; i < usersDetails.length; i+= 1) {
//     let pronoun = ""
//     if (usersDetails[i].gender === "Male") {
//         pronoun = "He"
//     } else {
//         pronoun = "She"
//     }
//     console.log(`user ${usersDetails[i].name} is ${usersDetails[i].age} years old. ${pronoun} is a ${usersDetails[i].gender} `)
// }

// let name = "Fijafolorun"
// let fullname = "Testimony "; 
// console.log(name.length)
// for (let i = 0; i <= name.length; i += 1) {
//     // console.log(name.charAt(i))

//     // console.log(fullname += name.charAt(i));
//     fullname += name.charAt(i)
// }

// console.log(fullname);

// let number = [8, 2, 4, 6, 1] 
// console.log()
// for (let i = 0; i <= number.length; i += 1) {
//     // console.log(name.charAt(i))

//     // console.log(fullname += name.charAt(i));
//     number[i] += 5
// }

// console.log(number);

let number = [8, 2, 4, 6, 1] 

for (let i = 0; i < number.length; i += 1) {
    // console.log(number[i] += 5);
    number[i] += 5;
}

console.log(number);

// write a function that dynamically increment the values of an array only when those values are greater than 10