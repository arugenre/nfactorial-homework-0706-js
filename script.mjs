// require = require('esm')(module)

// 1. Переменные - let, const
let name = "Dalida", age = 18, city = "Janaozen";
const PI_NUM = 3.14;

// 2. Типы данных - string, number, boolean, null, undefined
let day = 3;
let justDouble = 123.42;  // double 
const company = "NFACTORIAL"; // string
const doYouLikeIncubator = true; // boolean
let hmswfi; // how many students will finish incubator ? ans: undefined 
let blabla = null; // null

// 3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже),
//  добавление функции в объект

let lesson1 = {
    title: "GIT/TERMINAL",
    teacher: "Aidar",
    durationInHours: 2,
};
lesson1.hwAssigned = false;
delete lesson1.hwAssigned; 

lesson1["room"] = "lec1";
delete lesson1["room"];
 
let title2 = "HTML/CSS";
let teacher2 = "Murat";
let durationInHours2 = 2;
let lesson2 = { title2, teacher2, durationInHours2 };

function createLesson(title, teacher) {
    return {
        title: title,
        teacher: teacher
    };
}
  
let user = createLesson("DOM/Events", "Aruzhan");

// 4. Массивы - использовать все методы, которые мы прошли. 
// Не забывать про map, filter, rest и spread операторы. Еще slice ;)

let topics = ["GIT/TERMINAL", "HTML/CSS", "JS", "DOM/Events", "Bootstrap"];

console.log(topics.pop());
console.log(topics.push("NPM"));
console.log(topics);
console.log(topics.shift());
console.log(topics);
console.log(topics.unshift("GIT/TERMINAL"));
console.log(topics);

// slice
console.log(topics.length);
console.log(topics.slice(0, 2))

// filter
let topicsCovered = topics.filter(i => topics.indexOf(i) < day);
console.log(topicsCovered);

// map
let lengths = topicsCovered.map(i => i.length);
console.log(lengths);

// rest
function covered(name, day, ...topic){
    return `${name} covered ${topicsCovered} in ${day} days.`;
}
console.log(covered("Students", day, topicsCovered));

// a few moments later
// spread
topicsCovered = [...topicsCovered, topics[3], topics[4]];
console.log(topicsCovered);


// 5. Сравнения - нестрогое и строгое, условный оператор,
// оператор нулевого слияния, преобразование к логическому типу, switch
console.log(doYouLikeIncubator == 1); // нестрогое true
console.log(doYouLikeIncubator === 1); // строгое false

// условный оператор
if (doYouLikeIncubator){
    console.log("Incubator is FANTASTIC !!! ");
} else {
    console.log("I don't like it ");
}
// оператор нулевого слияния
blabla = blabla ?? "blabla";
console.log(blabla);

// преобразование к логическому типу
console.log("What do you thik, how many students will finish incubator ? ")
if (hmswfi) {
    console.log("No more than 200)");
} else {
    console.log("Will see it later. It's undefined ");
}

// switch
// let arg = prompt("Are you student/mentor/Dalida/nobody? ");
// let arg = ''
// switch(arg) {
//     case "student":
//         alert("Hey student! Have you done your homework?");
//         break;
//     case "mentor":
//         alert("Hey mentor! Have you checked my homework?");
//         break;
//     case "Dalida":
//         alert("hey, hozyain! How do you do? ");
//         break;
//     case "nobody":
//         alert("Harry Potter dal Dobbi nosok. Teper' Dobbi svoboden! U Dobbi net hozyaina )");
//         break;
//     default:
//         alert("Unknown value");
//         break;
// }


// 6. Циклы - for, while, do while

// while 
// while (day <= 5){
//     day++;
//     alert(`DAY ${day}`);
// }

// // do-while
// do {
//     alert("day off")
//     day++;
// } while (day <= 7);

// // for
// let i = 3;
// for (; i < day-1; i++){
//     alert(`Days remained to Sunday: ${day - i}`);
// }

// 7. Функции - обычные, function expression, arrow functions, destructuring

// обычные
function countLessons(arr=topicsCovered){
    return `We covered ${arr.length} topics`
}
console.log(countLessons());

// function expression
let sum = function(a, b){
    return `${a} + ${b} = ${a+b}`;
}
console.log(sum("NFACTORIAL ", "INCUBATOR"));

// arrow functions
let multiple = (a, b) => `${a} * ${b} = ${a*b}`;
console.log(multiple(3,8));

// destructuring
let hadThisLesson = (lesson) => topicsCovered.includes(lesson);
console.log(hadThisLesson("JS"));

// 8. export
export {sum, multiple};