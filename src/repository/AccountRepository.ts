import { Account } from "../model/Account";

export interface AccountRepository{
    getByNumber(number: number): void;
    getAll(): void;
    register(account: Account): void;
    update(account: Account): void;
    delete(number: number): void;

    withdraw(accountNumber: number, value: number): void;
    deposit(accountNumber: number, value: number): void;
    transfer(originAccountNumber: number, destinationAccountNumber: number, value: number): void;
}