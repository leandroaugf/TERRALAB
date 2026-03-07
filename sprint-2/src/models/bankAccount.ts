import { v4 as uuidv4 } from 'uuid';
import { User } from './user';

const bankAccounts: BankAccount[] = [];

interface BankAccount {
  id: string,
  agency: string,

  number: number,
  balance: number,
  user: User
}
interface BasicInfo {
  agency: string,
  number: number
}

export function createBankAccount(user: User, basicInfo: BasicInfo) {
  
  const bankAccount = {
    id: uuidv4(),
    agency: basicInfo.agency,
    number: basicInfo.number,
    balance: 0,
    user: user,
  }

  bankAccounts.push(bankAccount);
  return bankAccount;
}

export function withdraw(bankAccount: BankAccount, value: number) {
  if (value < bankAccount.balance) {
    bankAccount.balance -= value;
  } else {
    console.log('Saldo insuficiente');
  }

  return bankAccount.balance;
}

export function deposit(bankAccount: BankAccount, value: number) {
  bankAccount.balance += value;

  return bankAccount.balance;
}

export function getBankAccountInfo(basicInfo: BasicInfo) {
  const bankAccount = bankAccounts.find((item) => {
    return item.agency === basicInfo.agency && item.number === basicInfo.number;
  });

  return bankAccount;
}
