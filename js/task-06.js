// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

console.log("Задание 6");

let input;
const numbers = [];
let total = 0;
let i = 0;
let namber = 0;

do {
  input = prompt("Введите число");

  if (Number(input)) {
    numbers[i] = Number(input);
  }

  i += 1;
} while (input);

if (numbers.length > 0) {
  for (let namber of numbers) {
    total += namber;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log(`Масив пустой`);
}

// let input = 0;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введите число:');
//   if (input !== null) {

//     if (input === '' || isNaN(input)) {
//       alert(`Было введено не число, попробуйте еще раз`);
//       } else {
//         numbers.push(Number(input));
//       }

//   } else {
//     break;
//   }

// } while (input);

// console.log(numbers);

// if (numbers.length > 0) {

//   for (const number of numbers) {
//     total += number;
//   } 

//   console.log(`Общая сумма чисел равна ${total}`);
// } else {
//     console.log('Масив пустой.');
//   }
