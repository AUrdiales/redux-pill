import { createInterface } from "readline";
import chalk from "chalk";

import { createStore } from "./store";
import { incrementCounter, decrementCounter, reset, addNumber } from "./action";

const inputInterface = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.bgGreen.black("Welcome to REDUX 101!!"));
function initialize() {
  inputInterface.question(
    chalk.green("Please specify the initial counter value: "),
    counter => {
      const counterNumber = parseInt(counter);
      if (Number.isNaN(counterNumber)) {
        console.log(
          chalk.yellow(
            "The value of the input is not a number, please provide a number."
          )
        );
        initialize();
      } else {
        const store = createStore({
          counter: counterNumber,
          number: null
        });
        console.log(store.getState());
        question(store);
      }
    }
  );
}

function exit(store) {
  inputInterface.question(
    chalk.green(`Do you want to exit?${chalk.cyan("(y/N)")} `),
    answer => {
      if (answer === "y" || answer === "yes") {
        inputInterface.close();
        console.log(
          chalk.magenta(
            "Thanks for using redux 101! you can run yarn 101 to play with me again"
          )
        );
      } else {
        question(store);
      }
    }
  );
}

function question(store) {
  inputInterface.question(
    chalk.green(
      `Do you want to increment, decrement or reset the state? ${chalk.blue(
        "(+/-/0)"
      )}`
    ),
    answer => {
      const formattedAnswer = answer.toLowerCase().trim();
      if (
        formattedAnswer === "+" ||
        formattedAnswer === "-" ||
        formattedAnswer === "0"
      ) {
        switch (formattedAnswer) {
          case "+":
            store.dispatch(incrementCounter());
            break;
          case "-":
            store.dispatch(decrementCounter());
          case "0":
            store.dispatch(reset());
          default:
            break;
        }
        console.log(store.getState());
        if (store.getState().number) {
          exit(store);
        } else {
          questionNumber(store);
        }
      } else {
        console.log(
          chalk.yellow(
            `Please provide one of the specified values ${chalk.blue("+/-/0")}`
          )
        );
        question(store);
      }
    }
  );
}

function questionNumber(store) {
  inputInterface.question(
    chalk.green("Please specify the number state value: "),
    number => {
      const numberParsed = parseInt(number);
      if (Number.isNaN(numberParsed)) {
        console.log(
          chalk.yellow(
            "The value of the input is not a number, please provide a number."
          )
        );
        questionNumber(store);
      } else {
        store.dispatch(addNumber(numberParsed));
        console.log(store.getState());
        exit(store);
      }
    }
  );
}

initialize();
