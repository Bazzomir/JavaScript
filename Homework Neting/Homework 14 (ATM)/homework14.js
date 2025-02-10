/*
ATM =>
    1. implement objects
    2. add try-catch, extract keys, values, or key-value pairs: Object.keys(), Object.values(), Object.entries()
    3. use Object.assign() method, method inside object (this keyword), deeper nesting of objects
*/

let accountBalance = 50000;
let pin = 1234;
let pinAttempts = 3;
bills = {
  "EVN": {
    "accountNum": 12493857,
    "total": 10000,
    "interestEVN": 2,
    "checkInterestRate": function() {
      return "Interest rate for EVN: " + this.interestEVN + "%";
    },
  },
  "A1": {
    "accountNum": 33003551,
    "total": 2000,
    "interestA1": 1.5,
    "checkInterestRate": function() {
      return "Interest rate for A1: " + this.interestA1 + "%";
    },
  },
  "Vodovod": {
    "accountNum": 56773850,
    "total": 1000,
    "interestVodovod": 1.2,
    "checkInterestRate": function() {
      return "Interest rate for Vodovod: " + this.interestVodovod + "%";
    },
  },
};

function checkPin() {
  let askPin = prompt("BANK ATM\nEnter your pin to continue:");
  if (Number(askPin) === pin) {
    return true;
  } else {
    handleIncorrectPin();
    return false;
  }
}

function handleIncorrectPin() {
  pinAttempts--;
  if (pinAttempts > 0) {
    alert("Incorrect PIN. Please try again. You have " + pinAttempts + " attempts remaining.");
  } else {
    alert("Account locked. Please contact customer support.");
  }
  return;
}

function startMenu() {
  while (true) {
    if (!checkPin()) {
      continue;
    }

    let start = prompt(
      "WELCOME\n" +
      "Please choose the number for the preferred action:\n" +
      "1. Balance\n" +
      "2. Withdrawal\n" +
      "3. Deposit\n" +
      "4. Payments\n" +
      "5. Change pin\n" +
      "0. Exit");

    switch (Number(start)) {
      case 0:
        alert("You have successfully exited!");
        return;
      case 1:
        showBalance();
        break;
      case 2:
        withdrawAmount();
        break;
      case 3:
        depositAmount();
        break;
      case 4:
        makePayment();
        break;
      case 5:
        changePin();
        break;
      default:
        alert("Invalid choice. Please try again.");
    }
  }
}

function showBalance() {
  alert("Your current balance is: " + accountBalance.toFixed(2) + " MKD");
}

function withdrawAmount() {
  let amount;
  do {
    amount = prompt("How much do you want to withdraw?");
    amount = Number(amount);
  } while (isNaN(amount) || amount <= 0);

  if (amount > accountBalance) {
    alert("Insufficient funds. Please try again.");
    return;
  }

  if (confirm("Are you sure you want to withdraw " + amount.toFixed(2) + " MKD?")) {
    accountBalance -= amount;
    alert("You have withdrawn " + amount.toFixed(2) + ".\nYour new balance is " + accountBalance.toFixed(2) + " MKD.");
  } else {
    alert("Withdrawal canceled.");
  }
}

function depositAmount() {
  let amount;
  do {
    amount = prompt("How much do you want to deposit?");
    amount = Number(amount);
  } while (isNaN(amount) || amount <= 0);

  if (confirm("Are you sure you want to deposit " + amount.toFixed(2) + " MKD?")) {
    accountBalance += amount;
    alert("You have deposited " + amount.toFixed(2) + ".\nYour new balance is " + accountBalance.toFixed(2) + " MKD.");
  } else {
    alert("Deposit canceled.");
  }
}

function makePayment() {
  let billNames = Object.keys(bills);
  let billOptions = "";
  for (let i = 0; i < billNames.length; i++) {
    billOptions += (i + 1) + ". " + billNames[i] + ": " + bills[billNames[i]].total + " MKD\n";
  }
  
  let userChoice = prompt("Available bills:\n" + billOptions + "\nWhich bill do you want to pay? Enter the number:");
  if (isNaN(userChoice) || userChoice < 1 || userChoice > billNames.length) {
    alert("Invalid choice. Please enter a number between 1 and " + billNames.length);
    return;
  } 
  
  let billName = billNames[userChoice - 1]; 
  let bill = bills[billName]; 
  let amount = bill.total;
  
  if (accountBalance >= amount) { 
    accountBalance -= amount;
    alert("You have paid " + amount + " MKD for " + billName + ". Your new account balance is " + accountBalance + " MKD.");
  } else {
    let interest = bill["interest" + billName];
    let interestAmount = amount * interest / 100;
    let newAmount = amount + interestAmount;
    alert("You do not have enough funds to pay " + amount + " MKD for " + billName + 
    ". You will be charged " + interest + "% interest, which is " + interestAmount + " MKD. The new amount you have to pay is " + newAmount + " MKD.");
    alert("You have paid " + newAmount + " MKD for " + billName + ". Your new account balance is " + accountBalance + " MKD.");
  }
}

function changePin() {
  try {
    if (!pin) {
      throw new Error("Invalid PIN.");
    }

    let newPin;
    do {
      newPin = prompt("Enter your new PIN (numbers only):");
      if (isNaN(newPin) || newPin <= 0) {
        throw new Error("Invalid new PIN. Please enter only numbers greater than 0.");
      }
    } while (true);

    let confirmPin;
    do {
      confirmPin = prompt("Confirm your new PIN:");
      if (isNaN(confirmPin) || confirmPin !== newPin) {
        throw new Error("Confirmation PIN doesn't match. Please try again.");
      }
    } while (true);

    pin = Number(confirmPin);
    alert("Your PIN has been successfully changed.");
  } catch (error) {
    alert(error.message);
  }
}

/*
console.log(bills["EVN"]["checkInterestRate"]())
console.log(bills["A1"]["checkInterestRate"]())
console.log(bills["Vodovod"]["checkInterestRate"]())

let updatedBill = Object.assign({}, bills, {interestEVN: 2.5});

let updatedBills = {
  ...bills,
  EVN: {
    ...bills.EVN,
    accountNum: 12345678,
  },
  A1: {
    ...bills.A1,
    accountNum: 98765432,
  },
  Vodovod: {
    ...bills.Vodovod,
    accountNum: 01234567,
  },
};
*/

function printInterestRates() {
  for (billName in bills) {
    console.log(bills[billName].checkInterestRate());
  }
}

printInterestRates();
startMenu();