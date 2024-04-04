#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the first", type: "number", name: "firstNumber" },
    { message: "Enter the Second", type: "number", name: "SecondNumber" },
    { message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Divison"],
    },
]);
//conditionel Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "Divison") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    console.log("Please choose valid operator");
}
