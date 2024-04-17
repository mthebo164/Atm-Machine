import chalk from "chalk";
import inquirer from "inquirer";
// Initiated user balance and pin code
let myBalance = 10000;
let myPin = 1234;
// Printing A  welcome message
console.log(chalk.blue("\n \t Welcome To The ATM Machine \n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        mwssage: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n Pin is correct \n"));
    console.log(`Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawlMethod",
                type: "list",
                message: "Select a Withdrawl Method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawlMethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [500, 1000, 2000, 5000, 10000, 20000]
                }
            ]);
            if (fastcashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastcashAns.fastCash;
                console.log(`${fastcashAns.fastCash} Withdraw Successfully`);
                console.log(chalk.green(`Your Remaining Balance Is: ${myBalance}`));
            }
        }
        if (withdrawAns.withdrawl === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: "enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(chalk.green(`Your Remaining Balance Is: ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.green(`Your Current Balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Your Pin is Incorrect, Try Again!"));
}
