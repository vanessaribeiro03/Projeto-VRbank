import { Account } from "./Account";

export class CheckingAccount extends Account{
    private _limit: number;


	constructor(accountNumber: number, bankBranchNumber: number, type: number, holder: string, balance: number, limit: number) {
        super(accountNumber, bankBranchNumber, type, holder, balance)
		this._limit = limit;
	}


	public get limit(): number {
		return this._limit;
	}

    
	public set limit(value: number) {
		this._limit = value;
	}


    public withdraw(value: number): boolean{
        if(value > (this.balance + this._limit)){
            console.log('Insufficient balance.');
            return false;
        }
            
        this.balance -= value;
        return true;
    }


    public view(){
        super.view()
        console.log(`Account limit: ${this._limit}`);
    }
}