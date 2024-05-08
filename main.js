import inquirer from "inquirer";
console.log("This is a simple calculator where you can perform basic arithmetic operations.");
console.log("Please login to continue.");
const username = "hashirkhan";
const password = "iphone";
const login = await inquirer.prompt([
    {
        type: "input",
        name: "user",
        message: "Enter your username.",
    },
    {
        type: "password",
        name: "pass",
        message: "Enter your password.",
    },
]);
console.log(`Username: ${login.user}, Password: ${login.pass}`);
if (login.user === username && login.pass === password) {
    console.log("Login successful");
    let shouldContinue = true;
    while (shouldContinue) {
        const input = await inquirer.prompt([
            {
                type: "number",
                name: "num1",
                message: "Enter 1st number.",
            },
            {
                type: "number",
                name: "num2",
                message: "Enter 2nd number.",
            },
            {
                type: "list",
                name: "selectOperation",
                message: "Which arithmetic operation would you like to perform?",
                choices: [
                    "Addition",
                    "Subtraction",
                    "Multiplication",
                    "Division",
                    "Modulus",
                    "Exponentiation",
                    "Exit",
                ],
            },
        ]);
        const { num1, num2, selectOperation } = input;
        switch (selectOperation) {
            case "Addition":
                console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
                break;
            case "Subtraction":
                console.log(`The difference of ${num1} and ${num2} is: ${num1 - num2}`);
                break;
            case "Multiplication":
                console.log(`The product of ${num1} and ${num2} is: ${num1 * num2}`);
                break;
            case "Division":
                if (num2 !== 0) {
                    console.log(`The division of ${num1} and ${num2} is: ${num1 / num2}`);
                }
                else {
                    console.log("Error: Cannot divide by zero");
                }
                break;
            case "Modulus":
                console.log(`The modulus of ${num1} and ${num2} is: ${num1 % num2}`);
                break;
            case "Exponentiation":
                console.log(`The result of ${num1} raised to the power of ${num2} is: ${Math.pow(num1, num2)}`);
                break;
            case "Exit":
                shouldContinue = false;
                console.log("Exiting the calculator");
                break;
            default:
                console.log("Invalid operation");
        }
    }
}
else {
    console.log("Incorrect username or password");
}
