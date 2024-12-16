import { Account } from "../model/Account";
import { AccountRepository } from "../repository/AccountRepository";

export class AccountController implements AccountRepository{
    private listAccounts = new Array<Account>();

    public number: number = 0;

    getByNumber(number: number): void {
        const accountFound = this.findAccount(number);

        if(accountFound !== null){
            accountFound.view();
        }
        else {
            console.log('\nAccount not found.');
        } 
    }

    getAll(): void {
        for (const account of this.listAccounts) {
            account.view();
        }
    }

    register(account: Account): void {
       this.listAccounts.push(account);
       console.log('Account registered successfully!');
    }

    update(account: Account): void {
        const accountFound = this.findAccount(account.accountNumber);

        if(accountFound !== null){
            this.listAccounts[this.listAccounts.indexOf(accountFound)] = account;
            console.log('Account update!');
            
        } else{
            console.log('\nAccount not found.');
        }
    }

    delete(number: number): void {
        const accountFound = this.findAccount(number);

        if(accountFound !== null){
            this.listAccounts.splice(this.listAccounts.indexOf(accountFound), 1);
            console.log('Account removed.');
            
        } else{
            console.log('\nAccount not found.');
        }
    }

    withdraw(accountNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    deposit(accountNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    transfer(originAccountNumber: number, destinationAccountNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    } 

    public gerateNumber(): number{
        return ++this.number;
    }

    public  findAccount(numero: number): Account | null {
        for (let account of this.listAccounts) {
            if(account.accountNumber === numero){
                return account;
            }
        }

        return null;
    }
}

