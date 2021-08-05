'use strict';

let playGuessNumber = function () {

  let randomNumber;

  let getRandom = function () {
    randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log('randomNumber: ', randomNumber);
  };

  getRandom();

  let guess = function () {

    let userNumber = +prompt('Угадай число от 1 до 100');

    let check = function () {
      if (isNaN(userNumber)) {
        userNumber = +prompt('Виедите число');
        check();
      } else if (userNumber === +null) {
        alert('Игра закончена.');
        playGuessNumber();
      }
    };
    check();

    let compare = function () {
      if (userNumber === randomNumber) {
        alert('Поздравляю, Вы угадали!!!');
      }
      if (userNumber > randomNumber) {
        userNumber = +prompt('Загаданное число меньше. Введите новый вариант ответа.');
        check();
        compare();
      }
      if (userNumber < randomNumber) {
        userNumber = +prompt('Загаданное число больше. Введите новый вариант ответа.');
        check();
        compare();
        
      }
    };
    compare();
  };
  guess();
};

playGuessNumber();






