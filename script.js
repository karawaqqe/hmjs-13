//  1
const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";

let { hobby, premium } = user;
hobby = "skydiving";
premium = false;

user.hobby = hobby;
user.premium = premium;

for (const key of Object.keys(user)) {
  const value = user[key];
  console.log(`${key}: ${value}`);
}

// 2

function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}

//  3

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }

  return bestName;
}

//  4

function countTotalSalary(employees) {
  let total = 0;

  for (const amount of Object.values(employees)) {
    total += amount;
  }

  return total;
}

//  5

function getAllPropValues(arr, prop) {
  const result = [];

  for (const obj of arr) {
    const { [prop]: value } = obj;
    if (value !== undefined) {
      result.push(value);
    }
  }

  return result;
}

//  6

function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }
  return 0;
}

// керування особистим кабінетом інтернет-банку

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  nextId: 1,

  createTransaction(amount, type) {
    return {
      id: this.nextId++,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття.");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(({ id: tid }) => tid === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: t }) => t === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};

account.deposit(1000);
account.withdraw(500);
account.withdraw(800);
console.log(account.getBalance());
console.log(account.transactions);
const { id } = account.transactions[0];
console.log(account.getTransactionDetails(id));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
