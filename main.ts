import inquirer from "inquirer";

console.log(
    "This is a simple calculator where you can perform basic arithematic operations."
);

console.log("Please login to continue.");

const username = "hashirkhan";
const password = "12345";

const login = await inquirer.prompt([
    {
        type: "input",
        name: "user",
        message: "Enter your username.",
    },
    {
        type: "password",
        name: "pass",
        message: "Enter you password.",
    },
]);
console.log(`username: ${login.user} password: ${login.pass}`);

if (login.user == username && login.pass == password) {
    console.log("Login sussessful");


    let shouldContinue = true
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
                mesage: `Which arithemetic operations you'd like to perform`,
                choices: [
                    "Addition",
                    "Subtraction",
                    "Multiplication",
                    "Division",
                    "Modulus",
                    "Exponent",
                    "Exit"
                ],
            },
        ]);

        const { num1, num2, selectOperation } = input;

        if (selectOperation === 'Exit') {
            shouldContinue = false
            console.log("Exiting the calculator");
            continue;

        }



        switch (selectOperation) {
            case "Addition":
                console.log(
                    `The sum of ${input.num1} and ${input.num2} is: ${input.num1 + input.num2
                    }`
                );
                break;
            case "Subtraction":
                console.log(
                    `The Subtraction of ${input.num1} and ${input.num2} is: ${input.num1 - input.num2
                    }`
                );
                break;
            case "Multiplication":
                console.log(
                    `The Multiplication of ${input.num1} and ${input.num2} is: ${input.num1 * input.num2
                    }`
                );
                break;
            case "Division":
                if (num1 !== 0) {
                    console.log(
                        `The Division of ${input.num1} and ${input.num2} is: ${input.num1 / input.num2
                        }`
                    );
                } else {
                    console.log("Error: Cannot divide by 0");
                }
                break;
            case "Modulus":
                console.log(
                    `The Modulus of ${input.num1} and ${input.num2} is: ${input.num1 % input.num2
                    }`
                );
                break;
            case "Exponent":
                console.log(
                    `The result of ${input.num1} raised to the power ${input.num2} is: ${Math.pow(num1, num2)}`
                );
                break;
        }
    }

}
else {
    console.log("Incorrect username or passwrod");
}