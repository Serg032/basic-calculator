"use strict";
const numbers = {
    zero: document.getElementById("zero"),
    one: document.getElementById("one"),
    two: document.getElementById("two"),
    three: document.getElementById("three"),
    four: document.getElementById("four"),
    five: document.getElementById("five"),
    six: document.getElementById("six"),
    seven: document.getElementById("seven"),
    eight: document.getElementById("eight"),
    nine: document.getElementById("nine"),
};
const symbols = {
    add: document.getElementById("add"),
    minus: document.getElementById("minus"),
    plus: document.getElementById("plus"),
    divide: document.getElementById("divide"),
};
const instructions = document.querySelector(".instructions");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const equal = document.getElementById("equal");
const result = document.querySelector(".result");
const addNumberToInstructions = (number) => {
    if (instructions) {
        instructions.textContent += number.toString();
    }
};
const addSymbolToInstructions = (symbol) => {
    const canAddNumbers = validateAddSymbols();
    if (!canAddNumbers) {
        return;
    }
    else {
        if (instructions) {
            instructions.textContent += symbol.toString();
        }
    }
};
const validateAddSymbols = () => {
    if (instructions) {
        const content = instructions.textContent;
        const instructionsValue = instructions.textContent;
        const lastChar = instructionsValue.charAt(instructionsValue.length - 1);
        const isSymbolIn = instructionsValue
            .split("")
            .some((item) => item === "/" || item === "*" || item === "+" || item === "-");
        if (content === "" ||
            lastChar === "/" ||
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "*" ||
            isSymbolIn) {
            return false;
        }
        else {
            return true;
        }
    }
};
Object.keys(numbers).forEach((key) => {
    const buttonKey = key;
    const button = numbers[buttonKey];
    button.addEventListener("click", () => {
        const number = Number(button.textContent);
        addNumberToInstructions(number);
    });
});
Object.keys(symbols).forEach((key) => {
    const buttonKey = key;
    const button = symbols[buttonKey];
    button.addEventListener("click", () => {
        const symbol = button.textContent;
        addSymbolToInstructions(symbol);
    });
});
ac.addEventListener("click", () => {
    instructions.textContent = "";
    result.textContent = "";
});
del.addEventListener("click", () => {
    if (instructions) {
        instructions.textContent = instructions.textContent.slice(0, -1);
    }
});
equal.addEventListener("click", (event) => {
    let instructionsValue = instructions.textContent;
    if (instructionsValue !== "") {
        const theresNoSimbol = !(instructionsValue === null || instructionsValue === void 0 ? void 0 : instructionsValue.split("").some((item) => item === "/" || item === "*" || item === "+" || item === "-"));
        if (theresNoSimbol) {
            return;
        }
        else {
            const values = instructionsValue.split(/[/+*-]/);
            const firstValue = values[0];
            const secondValue = values[1];
            if (secondValue === "") {
                return;
            }
            else {
                const firstNumber = parseInt(firstValue);
                const secondNumber = parseInt(secondValue);
                const operator = instructionsValue === null || instructionsValue === void 0 ? void 0 : instructionsValue.split("").find((operator) => operator === "/" ||
                    operator === "*" ||
                    operator === "+" ||
                    operator === "-");
                if (operator === "/") {
                    result.textContent = (firstNumber / secondNumber).toString();
                    instructions.textContent = "";
                }
                else if (operator === "*") {
                    result.textContent = (firstNumber * secondNumber).toString();
                    instructions.textContent = "";
                }
                else if (operator === "+") {
                    result.textContent = (firstNumber + secondNumber).toString();
                    instructions.textContent = "";
                }
                else if (operator === "-") {
                    result.textContent = (firstNumber - secondNumber).toString();
                    instructions.textContent = "";
                }
            }
        }
    }
    else {
    }
});
