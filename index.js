"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const calculator_1 = require("./calculator");
const calculator = new calculator_1.Calculator();
const num1 = 10;
const num2 = 5;
console.log(`Add: ${num1} + ${num2} = ${calculator.add(num1, num2)}`);
console.log(`Subtract: ${num1} - ${num2} = ${calculator.subtract(num1, num2)}`);
console.log(`Multiply: ${num1} * ${num2} = ${calculator.multiply(num1, num2)}`);
console.log(`Divide: ${num1} / ${num2} = ${calculator.divide(num1, num2)}`);
