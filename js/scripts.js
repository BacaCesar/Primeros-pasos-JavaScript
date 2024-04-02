function printName(name) {
  console.log(name);
}

function addNumbers(numberA, numberB) {
  const result = numberA + numberB;
  console.log(result);
}

addNumbers(6, 8);
printName('Victor');
printName('Oscar');
printName('Tiffany');

function SayHello(name) {
  const greeting = 'Hola ' + name;
  console.log(greeting);
}

SayHello('Tiffany');

function calculateSquareArea(side) {
  const result = side * side;
  console.log(result);
}
calculateSquareArea('10');

function calculateTriangleArea(base, height) {
  const result = (base * height) / 2;
  console.log(result);
}
calculateTriangleArea(5, 5);

function calculateCircleArea(radius) {
  const result = 3.14 * radius * radius;
  console.log(result);
}
calculateCircleArea(4);

function celsiusToFahrenheit(celsius) {
  const result = celsius * 1.8 + 32;
  console.log(result);
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(fahrenheit) {
  const result = (fahrenheit - 32) / 1.8;
  console.log(result);
}
fahrenheitToCelsius(25);

function totalPrice(price) {
  const result = price * 1.21;
  console.log(result);
}
totalPrice(200);

function writeMessage(name, material, size, note) {
  const message =
    name +
    ' ha pedido una caja de ' +
    material +
    ' de tamaño' +
    size +
    '.' +
    note;
  console.log(message);
}

writeMessage('César', 'adamantium', ' colosal', ' me encanta');

console.clear();

function media(numberA, numberB, numerC) {
  const media = numberA + numberB + numerC / 3;
  return media;
}
const result = media(5, 7, 9);
console.log(result);

function discount(discount, price) {
  const result = price - (price * discount) / 100;
  return result;
}
const discountResult = discount(50, 200);
console.log(discountResult);

function twoWords(wordA, wordB) {
  const wordsResult = wordA + '-' + wordB;
  return wordsResult;
}
const wordsResult = twoWords('hola', 'cesar');
console.log(wordsResult);

function kilometersTometers(km) {
  const meters = km * 1000;
  return meters;
}
const meters = kilometersTometers(1);
console.log(meters);

function hourToseconds(hour) {
  const seconds = hour * 3600;
  return seconds;
}
const seconds = hourToseconds(2);
console.log(seconds);

function kmhToMetersPerSeconds(speed) {
  const meters = kilometersTometers(speed);
  const seconds = hourToseconds(1);
  return meters / seconds;
}
const convertedSpeed = kmhToMetersPerSeconds(110);
console.log(convertedSpeed + ' m/s');

console.clear();

const getMeters = kilometers => kilometers * 1000;
const totalMeters = getMeters(160);
console.log(totalMeters);

const media2 = (numberA, numberB, numberC) => (numberA + numberB + numberC) / 3;
const average = media2(2, 6, 9);
console.log(average);

const isAdult = (nameA, age) => {
  if (age <= 18) {
    console.log('Hola ' + nameA + ' , eres mayor de edad');
  } else {
    console.log('Hola ' + nameA + ' , eres menor de edad');
  }
};
isAdult('Oscar', 23);

const discount2=