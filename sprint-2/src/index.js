"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = require("./models/bankAccount")
const bankAccount_2 = require("./models/bankAccount");
const bankAccount_3 = require("./models/bankAccount");
const user_1 = require("./models/user");
const userr = (0, user_1.createUser)({ id: "", age: 21, name: 'John Doe', email: "johndoe@icloud.com" });
const bankAccount = (0, bankAccount_1.createBankAccount)(userr, { agency: '0001', number: 1 });
(0, bankAccount_2.deposit)(bankAccount, 1000);
(0, bankAccount_3.withdraw)(bankAccount, 200);
console.log(bankAccount.balance);
