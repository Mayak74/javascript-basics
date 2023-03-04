"use strict";

function solveEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    let roots = [];
    return roots;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
      let roots = [x];
    return roots;
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      let roots = [x1,x2];
    return roots;
  }
}

let a = parseFloat(prompt("Введите коэффициент a:"));
let b = parseFloat(prompt("Введите коэффициент b:"));
let c = parseFloat(prompt("Введите коэффициент c:"));

let result = solveEquation(a, b, c);

if (result.length === 0) {
  console.log("Уравнение не имеет действительных корней");
} else if (result.length === 1) {
  console.log(`Уравнение имеет один корень: x = ${result[0]}`);
} else {
  console.log(`Уравнение имеет два корня: x1 = ${result[0]}, x2 = ${result[1]}`);
}