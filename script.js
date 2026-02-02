// Sum of 1 to 5
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     console.log("i:", i);
// }
// console.log("sum:", sum)

// let i = 1 ;
// while(i<=5){
//     console.log("i:",i);
//     i++;
// }


// let i = 1
// do {
//     console.log("i:", i)
//     i++; 
// } while (i <= 50)

// let str = "Siddhi"
// let size = 0;
// for (let val of str) {
//     console.log(val)
//     size++;

// }
// console.log("String Size:", size);

let student = {
    name: "Siddhi Gavhane",
    age: 20,
    cgpa: 9.28,
    isPass: true
}

for (let key in student) {
    console.log("key:", key, "|", "value:", student[key]);
}

// print all even number from 0 to 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}