class ATM {
  constructor(current_balance) {
    this.current_balance = current_balance;
  }

  accountDeposit() {
    const deposit = parseFloat(
      prompt("How much would you like to deposit? (enter 0 to cancel)\n>>>")
    );
    if (deposit < 0) {
      console.log("Please enter an amount greater than $0.\n");
      return this.current_balance;
    }
    if (deposit > 0) {
      console.log("You have deposited $" + deposit);
    }
    if (deposit === 0) {
      return this.current_balance;
    }
    this.current_balance += deposit;
    return this.current_balance;
  }

  accountWithdrawal() {
    const withdrawal = parseFloat(
      prompt("How much would you like to withdraw? (enter 0 to cancel)\n>>>")
    );
    if (withdrawal < 0) {
      console.log("Please enter an amount greater than $0.\n");
      return this.current_balance;
    }
    if (withdrawal > this.current_balance) {
      console.log("You have insufficient funds\n");
      const newWithdrawal = parseFloat(
        prompt(
          "Please enter an amount less than or equal to $" + current_balance
        )
      );
      withdrawal = newWithdrawal;
    }
    if (withdrawal === 0) {
      return this.current_balance;
    }
    console.log(
      "You have withdrawn $" + withdrawal + ". Please take your cash."
    );
    this.current_balance -= withdrawal;
    return this.current_balance;
  }
}

console.log("Welcome to B.O.S.S. ATM!");
let current_balance = 100;
const account = new ATM(current_balance);

while (true) {
  console.log("Your current balance is: $" + current_balance);
  const menu =
    "Please choose from the following options:\n1: Balance Check\n2: Deposit\n3: Withdrawal\n4: Quit\n>>>";
  const user_input = prompt(menu);

  if (user_input === "1") {
    // console.log("Your current balance is: $" + current_balance);
  } else if (user_input === "2") {
    current_balance = account.accountDeposit();
  } else if (user_input === "3") {
    current_balance = account.accountWithdrawal();
  } else if (user_input === "4") {
    console.log("Thank you, See you next time!");
    break;
  } else if (user_input === null) {
    console.log("Thank you, See you next time!");
    break;
  }
}
