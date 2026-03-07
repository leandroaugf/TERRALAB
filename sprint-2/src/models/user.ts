import { v4 as uuidv4 } from 'uuid';

const users: User[] = [];

export interface User {
  id: string,
  age: number,
  name: string,
  email: string
}

export function createUser(user: User) {
  user.id = uuidv4();

  users.push(user);
  return user;
}

export function updateUser(user: User) {
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

export function getUserByEmail(email: string) {
  return users.findIndex((item) => item.email === email);
}

export function removeUser(id: string) {
  const index = users.findIndex((item) => item.id === id);

  users.splice(index, 1);
}