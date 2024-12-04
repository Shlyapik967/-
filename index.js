function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(5, 10);
console.log("Результат: " + result);

if (result > 10) {
  console.log("Сумма больше 10");
} else {
  console.log("Сумма меньше или равна 10");
}
