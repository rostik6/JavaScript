// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr = [];
arr[0] = 1;
arr[1] = 134;
arr[2] = 681;
arr[3] = 164;
arr[4] = 146;
arr[5] = 241;
arr[6] = 114;
arr[7] = 131;
arr[8] = 801;
arr[9] = 21;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


let book1 = {
    title: "qwerty",
    pageCount: 3,
    genre: "horror",
}
let book2 = {
    title: "qwert",
    pageCount: 5,
    genre: "comedy",
}
let book3 = {
    title: "qwertyer",
    pageCount: 8,
    genre: "triller",
}

book1.author = ["Vasya", 32];
book2.author = ["Sofia", 35];
book3.author = ["Anna", 15];
console.log(book1)
console.log(book2)
console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: "Rostik",
        username: "Glovach",
        password: 667,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 467,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 1167,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 14463463643647,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 14579,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 197,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 18667,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 1455858667,

    },{
        name: "Rostik",
        username: "Glovach",
        password: 143567,

    },{
        name: "Rostik",
        username: "Glovach",
        password:767,

    }


]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
