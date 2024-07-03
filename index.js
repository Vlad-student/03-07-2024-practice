// const numbers = [5, 10, 15, 20, 25, 30, 35];

console.group('1 task')
// 1) Напишіть код, який видаляє останній елемент з масиву numbers і додає його на початок.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const lastItem=numbers.pop();
// numbers.unshift(lastItem);
// console.log(numbers);
console.groupEnd();

console.group('2 task')
// 2) Напишіть код, який видаляє перший елемент з масиву numbers і додає його в кінець.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const firstItem=numbers.shift();
// numbers.push(firstItem);
// console.log(numbers);
console.groupEnd();

console.group('3 task')
// 3) Напишіть код, який видаляє три елементи з масиву numbers, починаючи з індексу 2, і на їх місце ставить один новий елемент.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// numbers.splice(2,3,55);
// console.log(numbers);
console.groupEnd();

console.group('4 task')
// 4) Напишіть код, який приймає число 10 і перевіряє чи один раз це число є в масиві чи будь-яку іншу кількість разів.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const num =10;
// if (numbers.includes(num)) {
//     console.log('yes');
// }else{
//     console.log('no');
// }
console.groupEnd();

console.group('5 task')
// 5) Напишіть код, який використовує метод forEach для виведення кожного елемента масиву numbers на консоль.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// numbers.forEach((number)=>{
//     console.log(number);
// })
console.groupEnd();

console.group('6 task')

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// numbers.forEach((number)=>{
//     console.log(number*3);
//  })
console.groupEnd();

console.group('7 task')
//7) Напишіть код, який використовує метод map для створення нового масиву, де кожен елемент масиву numbers збільшений в 10 разів.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const newArrayNumber = numbers.map((elem)=>elem*10);
// console.log(newArrayNumber);
console.groupEnd();

console.group('8 task')
// 8) Напишіть код, який використовує метод map для створення нового масиву, де кожен елемент масиву numbers збільшений на 5.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const newArrayNumber = numbers.map((elem)=>elem+5);
// console.log(newArrayNumber);
console.groupEnd();

console.group('9 task')
// 9)Напишіть код, який використовує метод filter для створення нового масиву, що містить тільки ті елементи масиву numbers, які більше 20.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const evenNumbers = numbers.filter((item)=>item>20);
// console.log(evenNumbers);
console.groupEnd();

console.group('10 task')
// 10)  Напишіть код, який використовує метод filter для створення нового масиву, що містить тільки ті елементи масиву numbers, які кратні 6.

// const numbers = [5, 10, 15, 20, 25, 30, 35];
// console.log(numbers);
// const evenNumbers = numbers.filter((item)=>item%6===0);
// console.log(evenNumbers);
console.groupEnd();

console.group('11 task')
// 11) Напишіть код, який перевіряє чи є число, яке ввів користувач, в масиві numbers, якщо є - виводить рядок "Ваше число є в масиві", якщо не має повторює запит на введення числа.

const numbers = [5, 10, 15, 20, 25, 30, 35];
while (true) {
    let userInputNumber = prompt('Enter number');
    if (numbers.includes(Number(userInputNumber))) {
        console.log('Ваше число є в масиві');
        break;
      } else {
        console.log(' Спробуйте ще раз');
      }
}
console.groupEnd();

