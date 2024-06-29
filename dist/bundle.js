System.register("helpers/add-to-instructions", [], function (exports_1, context_1) {
    "use strict";
    var instructions, addToInstructions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            instructions = document.querySelector(".instructions");
            exports_1("addToInstructions", addToInstructions = (value) => {
                instructions
                    ? (instructions.textContent += value)
                    : console.log("no instructions");
            });
        }
    };
});
System.register("index", ["helpers/add-to-instructions"], function (exports_2, context_2) {
    "use strict";
    var add_to_instructions_1, numbers, getNumber, getSimbol;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (add_to_instructions_1_1) {
                add_to_instructions_1 = add_to_instructions_1_1;
            }
        ],
        execute: function () {
            console.log("Hello, world!");
            numbers = {
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
            getNumber = (number) => {
                console.log(number);
                add_to_instructions_1.addToInstructions(number.toString());
                return number;
            };
            getSimbol = () => {
                console.log(".");
                add_to_instructions_1.addToInstructions(".");
                return ".";
            };
        }
    };
});
