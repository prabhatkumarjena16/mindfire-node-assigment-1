const inquirer = require("inquirer");
var output = [];
let total = 0;
let selected_item;

//item List
const itemList = [
  { name: "Soap - 10 rupees/item", amount: 10 },
  { name: "Tooth Paste 20 rupees/item", amount: 20 },
  { name: "Ice cream 30 rupees/item", amount: 30 },
];

//questions
var questions = [
  {
    type: "rawlist",
    name: "item",
    message: "Hey there, We have the following items in our shop.",
    choices: [
      "Soap - 10 rupees/item",
      "Tooth Paste 20 rupees/item",
      "Ice cream 30 rupees/item",
    ],
  },
  {
    name: "number",
    message: "How many ?",
    default: 0,
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Anything else ?",
    default: false,
  },
];

//check answer and do calcutation
function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers);
    if (answers.askAgain) {
      ask();
    } else {
      //calculation of total amount
      output.forEach((item_output) => {
        selected_item = itemList.find((item) => item.name === item_output.item);
        total += selected_item.amount * answers.number;
      });
      console.log(total);
    }
  });
}

ask();
