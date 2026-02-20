// const name = "Igor";
// const age = 42;
// console.log(name);
// console.log('Мені ' + age + ' роки');

// const x = 5;
// const y = 10;
// const addition = x + y;
// const subtraction = x - y;
// const multiplication = x * y;
// const division = x / y;
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);

// const city = 'Rivne';
// console.log('Я живу в місті ' + city);

// const price = 500;
// console.log('Ціна ' + price + 'грн');

// const firstName = 'Igor';
// const lastname = 'Brovchuk';
// const fullName = firstName + ' ' + lastname;
// console.log(fullName);

// const radius = 5;
// const pi = 3.14;
// const area = pi * radius ** 2;
// console.log(area);

// const someString = 'lorem-ipsum';
// console.log(someString.length);

// const someString2 = 'Hello world';
// const firstLetter = someString2[0];
// const lastLetter = someString2[someString2.length - 1]
// console.log(firstLetter);
// console.log(lastLetter);

// const str1 = 'hello';
// const str2 = 'world';
// const lastLetter1 = str1[str1.length - 1];
// const lastLetter2 = str2[str2.length - 1];
// console.log(lastLetter1 + lastLetter2);

// const userValue = 512;
// const result = userValue * 5 ** String(userValue).length;
// console.log(result);

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// function foo(str1, str2) {
//     if (str1[0] === str2[str2.length - 1])
//         return true;
//     else {
//         return false;
//     }
// }
// console.log(foo('hello', 'world'));

// function foo(str1, str2) {
//     if (str1.length === str2.length) {
//         return true;
//  }  else {
//         return false;
//     }
// }
// console.log(foo('hello', 'world'));

// function foo(num) {
//     if (String(num).length % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(foo(88));

// function foo(num) {
//     return num % 2 === 1;
// }
// console.log(foo(5));

// function foo(str) {
//     return str !== str.toLowerCase();
// }
// console.log(foo('Hello'));

// function foo(str) {
//     return str.includes(' ');
// }
// console.log(foo('Cyberdyne Systems'));

// function foo(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(foo('okko'));

// const value = 27.5;
// const floor = Math.floor(value);
// const  ceil = Math.ceil(value);
// const round = Math.round(value);
// console.log(floor);
// console.log(ceil);
// console.log(round);

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// function foo(age, balance) {
//     if (age >= 18 && balance > 100) {
//         return 'Wellcome'
//     } else {
//         return 'Goodbye'
//     }
// }
// console.log(foo(18, 101));

// function foo(temp) {
//     if (temp < 0) {
//         return 'Замерзає'
//     } else if (temp > 0 && temp < 25) {
//         return 'Нормальна температура'
//     } else {
//         return 'Спекотно'
//     }
// }
// console.log(foo(30));

// function foo(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return 'Високосний рік';
//     } else {
//         return 'Звичайний рік';
//     }
// }
// console.log(foo(2024));

// function foo(password, confirmPassword) {
//     const hasDigit = /\d/.test(password);
//     const isConfirm = password === confirmPassword;
//     if (hasDigit && isConfirm) {
//         return 'Пароль прийнято';
//     } else {
//         return 'Пароль не відповідає вимогам';
//     }
// }
// console.log(foo('12www', '12www'));

// function foo(isOnline, hasCamera, hasMicrophone) {
//     if (isOnline && (hasCamera || hasMicrophone)) {
//         return 'Готові до відеоконференції';
//     } else {
//         return 'Немає можливості для відеоконференції';
//     }
// }
// console.log(foo(true, false, true));

// function foo(currentDay, hasMeeting, isHoliday) {
//     const validDay = ['monday', 'wednesday', 'friday'].includes(currentDay);
//     const isHasMeeting = hasMeeting === true;
//     const notIsHoliday = isHoliday === false;
//     if (validDay && isHasMeeting && notIsHoliday) {
//         return 'Є зустріч';
//     } else {
//         return 'Немає зустрічі';
//     }
// }
// console.log(foo('wednesday', true, false));

// function foo(dayOfWeek) {
//     switch (dayOfWeek) {
//         case 1: return 'monday'; break;
//         case 2: return 'tuesday'; break;
//         case 3: return 'wednesday'; break;
//         case 4: return 'thursday'; break;
//         case 5: return 'friday'; break;
//         case 6: return 'suturday'; 
//         case 7: return 'sunday'; break;
//         default: return 'Невідомий день'
//     }
// }
// console.log(foo(7));

// function foo(continent) {
//     switch (continent) {
//         case 'red':
//         case 'orange':
//         case 'Yellow':
//             return 'Теплий колір';
//             break;
//         case 'blue':
//         case 'green':
//         case 'Purple':
//             return 'Холодний колір';
//             break;
//     }
// }
// console.log(foo('red'));

//!=================================================

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i + ' * 7 = ', i * 7);
// }

// const str = 'Hello world';
// for (let i = 1; i < str.length - 1; i += 2) {
//      console.log(str[i]);
// }

// const str = 'Hello world';
// for (let i = str.length - 1; i >= 0 ; i --) {
//      console.log(str[i]);
// }

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') break;
//     console.log(str[i]);
// }

// const str = 'JavaScript';
// for (let i = 0; i < str.length; i += 2) {
//     console.log(str[i]);
// }

// const str = 'JavaScript';
// for (let i = str.length-1; i >= 0; i--) {
//     console.log(str[i]);
// }

// function foo(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 1) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//             return result;
// }
// console.log(foo('offspring'));

// function getString(str1, str2, count) {
//     let result = str1;
//     for (let i = 0; i < count; i++) {
//         result += str2;
//     }
//     return result;
// }
// console.log(getString('hello', 'world ', 2));

// function foo(arr) {
//     for (let i = 0; i <= arr.length-1; i++) {
//         console.log(arr[i]);
//     }
// }
// console.log(foo([1,2,3,4,5,6,7,8]));

//!=================================================

// function foo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// console.log(foo([10,20,30,40,50]));

// function foo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//             }
//     }
// }
// console.log(foo([1,2,3,4,5,6]));

// function foo(arr, max) {
//     for (const item of arr) {
//         if (item > max) {
//         console.log(item)
//     }
// }
// }
// console.log(foo([1,2,3,4,5,6],3));

// function foo(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(foo([1,2,3,4]));

// function foo(arr, value) {
//     let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         result++;
//     } 
//     }
//     return result;
// }
// console.log(foo([1,2,3,4,4,4,5,6,7,3],4));

// function foo(array) {
//     const newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         newArray.push(array[i])
//     }
    
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3]));

// function foo() {
    

// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));

// function foo(array) {
//     const newArray = [];
//     for (const item of array) {
//         if (item.length < 6) {
//             newArray.push(item.toLowerCase());
//         } else {
//             newArray.push(item.toUpperCase());
//         }
//     }
//     return newArray;
// }
// console.log(foo(['Hello', 'World', 'Javascript', 'eye']));

// function foo(array) {
//     const newArray = [];
//     for (const item of array) {
//         if (item > 0) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));

// function foo(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * i);
//     }

// return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));

// function foo(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 3 === 0) {
//             newArray.push(array[i]);
//         }
        
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив 
//де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function foo(arr1, arr2) {
//     const newArray = [];
//     for (const item of arr1) {
//         if (arr2.includes(item)) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49], [44,45,46,47,48,49,]));
//!====================================================
//Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив 
//де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function foo(arr1, arr2) {
//     const newArray = [];
//     for (const item of arr1) {
//         if (!arr2.includes(item)) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49], [1,44,45,46,47,48,49,]));
//!====================================================
//Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function foo(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }       
//     }
//     return min;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function foo(arr) {
//     return Math.max(...arr);
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

// function foo(array) {
//     let sum = 0;
//      for (let i = 0; i < array.length; i++) {
//          sum += array[i];
//     }

// let avarage = sum / array.length;
// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > avarage) {
//         newArray.push(array[i]);
//     }
// }
//     return newArray;
// }

// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

// function foo(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > i) {
//             newArray.push(array[i]);
//         }
        
//     }
//     return newArray;
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону 
//але лише ті у яких не має цифри 5. К прикладу числа(51, 25, 15, 256) не підходять бо містять символ "5" у собі.

// function foo(start, end) {
//     const newArray = [];
//     for (let i = start; i <= end; i++) {
//         if (!i.toString().includes(5))
//             newArray.push(i);
//     }
//     return newArray;
// }
// console.log(foo(1,8));
// //!====================================================
//Напиши функцію, яка приймає массив чисел і повертає новий масив, 
//де всі парні числа переміщені в початок, а всі непарні - в кінець.

// function foo(arr) {
//     const evens = arr.filter(number => number % 2 === 0);
//     const odds = arr.filter(number => number % 2 !== 0);
//     return [...evens, ...odds];
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.

// function foo(arr) {
//     return arr.slice().sort((a, b) => a - b);
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================

// function foo() {
//     const newArray = [];
// }
// console.log(foo([1,-1,2,-2,3,-3,10,-30,44,49]));
//!====================================================
//Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з них.
// function foo(a, b, c) {
//     return Math.max(a, b, c);
// }
// console.log(foo(1, 5, 3));
//!====================================================
//Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та повертає true,
// якщо число знаходиться між мінімумом і максимумом(включно), і false, якщо ні.

// function foo(number, min, max) {
//     if (number > min && number < max) {
//         return true;
//     }
//     return false;
// }
// console.log(foo(11, 1, 10));
//!====================================================
//Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то повернути null,
// в іншому випадку повернути добуток цих двох чисел.

// function foo(a, b) {
//     if (a === 0 || b === 0) {
//         return null;
//     } else {
//         return a * b;
//      }
// }
// console.log(foo(0, 10));
//!====================================================
//Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова розділені пробілами).

// function createObj(name, age) {
//     return {
//         name: name,
//         age: age
//     };
// }
// console.log(createPerson("Ігор", 25));

//!====================================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNumbers = numbers.filter(number => number > 4);
// console.log(filteredNumbers);

//!====================================================

//!====================================================

//!====================================================

//!====================================================
