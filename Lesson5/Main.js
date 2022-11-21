// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rec(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result;
// }
// rec(10,20)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circ(r) {
//     let result = r ** 2;
//     console.log(result)
//     return result;
// }
// circ(6)
//

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cyl(h, r) {
//     let result = 2* r ** 2 + 2*r*h;
//     console.log(result);
//     return result;
//
// }
// cyl(15,5);

// // - створити функцію яка приймає масив та виводить кожен його елемент
// function x(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// x([1, 2, 3, 4, 5, 6]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//  function par(text) {
//      document.write(`<p>${arguments[0]}</p>`);
//  }
//  par('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// function ul(li) {
//     document.write(`<ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>`)
// }
// ul('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function war(text, numb) {
//     document.write(`<ul>`)
//     for (let i = 0; i < numb; i++) {
//         const textElement = text[i];
//         document.write(`<li>${text}</li>`)
//
//
//     }
// document.write(`</ul>`)
// }
// war(`text`, 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 'string', true];
// let arp = function (array) {
//     document.write(`<ul>`)
//         for (let arrElement of array) {
//             document.write(`<li>${arrElement}</li>`)
//         }
//
//         document.write(`</ul>`)
//
// };
// arp(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const arr = [
//     {
//         name: 'Rostik',
//         id: 'Rost',
//         age: 22,
//
//     },
//     {
//         name: 'Roman',
//         id: 'Rom',
//         age: 18,
//
//     }
// ]
// const users = function (array){
//     for (const user of array) {
//         document.write(`<div>${user.name} ${user.id} ${user.age}</div>`)
//     }
// }
// users(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 3];
// function num(array) {
//     let min = array[0];
//     for (const element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
//
// let num1 = num(arr);
// console.log(num1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13one
let arr = [1, 2, 10];

function res(array) {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}

console.log(res(arr));