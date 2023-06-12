class ATM {
  constructor(currentBalance) {
    this.currentBalance = currentBalance;
  }

  accountDeposit() {
    const deposit = parseFloat(
      prompt("How much would you like to deposit? (enter 0 to cancel)\n>>>")
    );
    if (deposit < 0) {
      console.log("Please enter an amount greater than $0.\n");
      return this.currentBalance;
    }
    if (deposit > 0) {
      console.log("You have deposited $" + deposit);
    }
    if (deposit === 0) {
      return this.currentBalance;
    }
    this.currentBalance += deposit;
    return this.currentBalance;
  }

  accountWithdrawal() {
    let withdrawal = parseFloat(
      prompt("How much would you like to withdraw? (enter 0 to cancel)\n>>>")
    );
    if (withdrawal < 0) {
      console.log("Please enter an amount greater than $0.\n");
      return this.currentBalance;
    }
    if (withdrawal > this.currentBalance) {
      console.log("You have insufficient funds\n");
      let newWithdrawal = parseFloat(
        prompt(
          "Please enter an amount less than or equal to $" + currentBalance
        )
      );
      withdrawal = newWithdrawal;
    }
    if (withdrawal === 0) {
      return this.currentBalance;
    }
    console.log(
      "You have withdrawn $" + withdrawal + ". Please take your cash."
    );
    this.currentBalance -= withdrawal;
    return this.currentBalance;
  }
}

console.log("Welcome to B.O.S.S. ATM!");
let currentBalance = 100;
const account = new ATM(currentBalance);

while (true) {
  console.log("Your current balance is: $" + currentBalance);
  const menu =
    "Please choose from the following options:\n1: Balance Check\n2: Deposit\n3: Withdrawal\n4: Quit\n>>>";
  const user_input = prompt(menu);

  if (user_input === "1") {
    // console.log("Your current balance is: $" + current_balance);
  } else if (user_input === "2") {
    currentBalance = account.accountDeposit();
  } else if (user_input === "3") {
    currentBalance = account.accountWithdrawal();
  } else if (user_input === "4") {
    console.log("Thank you, See you next time!");
    break;
  } else if (user_input === null) {
    console.log("Thank you, See you next time!");
    break;
  }
}
