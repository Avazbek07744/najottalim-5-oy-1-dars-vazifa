//! 1-misol \\\

// const info = ["Ali", 30, "Toshkent"];

// let [name, age, city] = info;

// console.log(name);

//! 2-misol \\\

// const colors = ["red", "green", "blue", "yellow", "purple"];
// let [qizil, yashil, ...res] = colors;

// console.log(res);

//! 3-misol \\\

// function firstAndLast(arg) {
//     let arg1 = arg[0]
//     let res = arg.sort(function (a, b) {
//         return b - a
//     })
//     return [arg1, arg[0]]
// }

// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result);

//! 4-misol \\\

// const numbers = [1, 2, 3, 4, 5, 6];
// let [, arg, , , arg1] = numbers;

// console.log(arg, arg1);

////? object destructuring

//! 1-misol \\\

// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
// };

// let { title, author } = book;
// console.log(titel);

//! 2-misol \\\

// const location1 = {
//     city: "Toshkent",
//     coordinates: {
//         latitude: 41.2995,
//         longitude: 69.2401
//     }
// };

// let {latitude, longitude ,} = location1;
// console.log(longitude);


//! 3-misol \\\

// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
// };

// let { firstName: fName, lastName: lName } = person;

// console.log(fName);

//! 4-misol \\\

// const settings = {
//     theme: "dark",
//     language: "uz"
// };

// let { theme, language, mode = "off", fontSize = "16px" } = settings;

// console.log(theme);

////? qo'shimcha masalalar

//! 1-misol \\\

// function configure(options) {
//     const { host = "localhost", port = 8080, protocol = "http" } = options;
//     console.log(`Connecting to ${protocol}://${host}:${port}`);
// }

// configure({ host: "127.0.0.1" });
// configure({ port: 3000 });

//! 2-misol \\\

// function combineAndExtract(arr1, arr2) {
//     const res1 = [...arr1, ...arr2];

//     const res2 = {
//         first: res1[0],
//         second: res1[1],
//         third: res1[2]
//     };

//     return res2;
// }

// const result = combineAndExtract([1, 2], [3, 4, 5]);
// console.log(result);

//! 1-misol \\\

//? 1-usul
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function toqNumY(arr) {
//     for (const i of arr) {
//         if (typeof i != "number") {
//             return i
//         }
//     }
//     let res = 0;
//     for (const i of arr) {
//         if (i % 2 == 1) {
//             res += i
//         }
//     }
//     return res
// }

// console.log(toqNumY(arr));

//? 2-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const toqNumY = function (arr) {
//     for (const i of arr) {
//         if (typeof i != "number") {
//             return i
//         }
//     }
//     let res = 0;
//     for (const i of arr) {
//         if (i % 2 == 1) {
//             res += i
//         }
//     }
//     return res
// }

// console.log(toqNumY(arr));

//? 3-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const toqNumY = (arr) => {
//     for (const i of arr) {
//         if (typeof i != "number") {
//             return i
//         }
//     }
//     let res = 0;
//     for (const i of arr) {
//         if (i % 2 == 1) {
//             res += i
//         }
//     }
//     return res
// }

// console.log(toqNumY(arr));

//! 2-misol \\\

//? 1-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function minElement(arr) {
//     let min = arr[0]

//     for (const i of arr) {
//         if (min > i) {
//             min = i
//         }
//     }
//     return min
// }
// console.log(minElement(arr));

//? 2-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const minElement = function (arr) {
//     let min = arr[0]

//     for (const i of arr) {
//         if (min > i) {
//             min = i
//         }
//     }
//     return min
// }
// console.log(minElement(arr));

//? 3-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const minElement = (arr) => {
//     let min = arr[0]

//     for (const i of arr) {
//         if (min > i) {
//             min = i
//         }
//     }
//     return min
// }
// console.log(minElement(arr));

//! 3-misol \\\

//? 1-usul

// let str = 'salom22022008'

// function string(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i >= 0) {
//             res.push(i)
//         }
//     }
//     return res.join(' ')
// }
// console.log(string(str));

//? 2-usul

// let str = 'salom22022008'

// const string = function (arg) {
//     let res = []
//     for (const i of arg) {
//         if (i >= 0) {
//             res.push(i)
//         }
//     }
//     return res.join(' ')
// }
// console.log(string(str));

//? 3-usul

// let str = 'salom22022008'

// const string = (arg) => {
//     let res = []
//     for (const i of arg) {
//         if (i >= 0) {
//             res.push(i)
//         }
//     }
//     return res.join(' ')
// }
// console.log(string(str));

//! 4-misol \\\

//? 1-usul

// let berilganNum = 5;

// function numningKvadrati(arg) {
//     return arg ** 2
// }
// console.log(numningKvadrati(berilganNum));

//? 2-usul

// let berilganNum = 5;

// const numningKvadrati = function (arg) {
//     return arg ** 2
// }
// console.log(numningKvadrati(berilganNum));

//? 3-usul

// let berilganNum = 5;

// const numningKvadrati = (arg) => {
//     return arg ** 2
// }
// console.log(numningKvadrati(berilganNum));

//! 5-misol \\\

//? 1-usul

// let str = 'salom bolalar';

// function TeskariStr(arg) {

//     let res = arg.split(' ').map(function (v) {
//         return v.split('').reverse().join('');
//     });

//     return res.join(' ');
// }

// console.log(TeskariStr(str));

//? 2-usul

// let str = 'salom bolalar';

// const TeskariStr = function (arg) {

//     let res = arg.split(' ').map(function (v) {
//         return v.split('').reverse().join('');
//     });

//     return res.join(' ');
// }

// console.log(TeskariStr(str));

//? 3-usul

// let str = 'salom bolalar';

// const TeskariStr = (arg) => {

//     let res = arg.split(' ').map(function (v) {
//         return v.split('').reverse().join('');
//     });

//     return res.join(' ');
// }

// console.log(TeskariStr(str));

//! 6-misol \\\

//? 1-usul

// let str = 'salom123/.,></';

// function harflarniOladi(arg) {
//     let res = 0;
//     for (const i of arg) {
//         if (i !== '/' && i !== '>' && i !== '<' && i !== ',' && i !== '.' && !Number(i)) {
//             res += 1;
//         }
//     }
//     return res;
// }

// console.log(harflarniOladi(str));

//? 2-usul
// let str = 'salom123/.,></';

// const harflarniOladi = function (arg) {
//     let res = 0;
//     for (const i of arg) {
//         if (i !== '/' && i !== '>' && i !== '<' && i !== ',' && i !== '.' && !Number(i)) {
//             res += 1;
//         }
//     }
//     return res;
// }

// console.log(harflarniOladi(str));

//? 3-usul
// let str = 'salom123/.,></';

// const harflarniOladi = (arg) => {
//     let res = 0;
//     for (const i of arg) {
//         if (i !== '/' && i !== '>' && i !== '<' && i !== ',' && i !== '.' && !Number(i)) {
//             res += 1;
//         }
//     }
//     return res;
// }

// console.log(harflarniOladi(str));

//! 7-misol \\\

//? 1-usu

// let berilganNum = 5;

// function numningKvadrati(arg) {
//     return arg ** 3
// }
// console.log(numningKvadrati(berilganNum));

//? 2-usul

// let berilganNum = 5;

// const numningKvadrati = function (arg) {
//     return arg ** 3
// }
// console.log(numningKvadrati(berilganNum));

//? 3-usul

// let berilganNum = 5;

// const numningKvadrati = (arg) => {
//     return arg ** 3
// }
// console.log(numningKvadrati(berilganNum));

//! 8-misol \\\

//? 1-usul

// let str = 'salom'

// function reverseVowels(str) {
//     const unlilar = 'aeiouAEIOU';

//     let res = [];
//     for (const i of str) {
//         if (unlilar.includes(i)) {
//             res.push(i);
//         }
//     }

//     res.reverse();

//     return res.join('');
// }

// console.log(reverseVowels(str));

//? 2-usul

// let str = 'salom'

// const reverseVowels = function (str) {
//     const unlilar = 'aeiouAEIOU';

//     let res = [];
//     for (const i of str) {
//         if (unlilar.includes(i)) {
//             res.push(i);
//         }
//     }

//     res.reverse();

//     return res.join('');
// }

// console.log(reverseVowels(str));

//? 3-usul

// let str = 'salom'

// const reverseVowels = (str) => {
//     const unlilar = 'aeiouAEIOU';

//     let res = [];
//     for (const i of str) {
//         if (unlilar.includes(i)) {
//             res.push(i);
//         }
//     }

//     res.reverse();

//     return res.join('');
// }

// console.log(reverseVowels(str));

//! 9-misol \\\

//? 1-usul

// let arr = [1, 2, 3, 4, 5]

// function ArrayortaRifmetigi(arr) {
//     let count = 0
//     let res = 0
//     for (const i of arr) {
//         res += i
//         count += 1
//     }
//     let res2 = res / count
//     return res2
// }

// console.log(ArrayortaRifmetigi(arr));

//? 2-usul

// let arr = [1, 2, 3, 4, 5]

// const ArrayortaRifmetigi = function (arr) {
//     let count = 0
//     let res = 0
//     for (const i of arr) {
//         res += i
//         count += 1
//     }
//     let res2 = res / count
//     return res2
// }

// console.log(ArrayortaRifmetigi(arr));

//? 3-usul

// let arr = [1, 2, 3, 4, 5]

// const ArrayortaRifmetigi = (arr) => {
//     let count = 0
//     let res = 0
//     for (const i of arr) {
//         res += i
//         count += 1
//     }
//     let res2 = res / count
//     return res2
// }

// console.log(ArrayortaRifmetigi(arr));

//! 10-misol \\\

//? 1-usul

// let str = 'salom ishlar qalay'
// let belgi = 'a'

// function reversString(arg1, arg2) {
//     return arg1.replaceAll(arg2, '')
// }
// console.log(reversString(str, belgi));

//? 2-usul

// let str = 'salom ishlar qalay'
// let belgi = 'a'

// const reversString = function (arg1, arg2) {
//     return arg1.replaceAll(arg2, '')
// }
// console.log(reversString(str, belgi));

//? 3-usul

// let str = 'salom ishlar qalay'
// let belgi = 'a'

// const reversString = (arg1, arg2) => {
//     return arg1.replaceAll(arg2, '')
// }
// console.log(reversString(str, belgi));