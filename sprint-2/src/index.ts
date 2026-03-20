import { createBankAccount } from './models/bankAccount';
import { getBankAccountInfo } from './models/bankAccount';

import { deposit } from './models/bankAccount'
import { withdraw } from './models/bankAccount'


import { createUser } from './models/user';

const user = createUser({ id: "", age: 21, name: 'John Doe', email: "johndoe@icloud.com" });
const bankAccount = createBankAccount(user, { agency: '0001', number: 1 });


deposit(bankAccount, 1000);
withdraw(bankAccount, 200);

console.log(bankAccount.balance);
