"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBankAccount = createBankAccount;
exports.withdraw = withdraw;
exports.deposit = deposit;
exports.getBankAccountInfo = getBankAccountInfo;
const uuid_1 = require("uuid");
const bankAccounts = [];
function createBankAccount(user, basicInfo) {
    const bankAccount = {
        id: (0, uuid_1.v4)(),
        agency: basicInfo.agency,
        number: basicInfo.number,
        balance: 0,
        user: user,
    };
    bankAccounts.push(bankAccount);
    return bankAccount;
}
function withdraw(bankAccount, value) {
    if (value < bankAccount.balance) {
        bankAccount.balance -= value;
    }
    else {
        console.log('Saldo insuficiente');
    }
    return bankAccount.balance;
}
function deposit(bankAccount, value) {
    bankAccount.balance += value;
    return bankAccount.balance;
}
function getBankAccountInfo(basicInfo) {
    const bankAccount = bankAccounts.find((item) => {
        return item.agency === basicInfo.agency && item.number === basicInfo.number;
    });
    return bankAccount;
}
