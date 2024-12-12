import { Account } from "./Account";

export class SavingsAccount extends Account{
    private _anniversary: number;


	constructor(accountNumber: number, bankBranch: number, type: number, holder: string, balance: number, anniversary: number) {
        super(accountNumber, bankBranch, type, holder, balance)
		this._anniversary = anniversary;
	}

   
	public get anniversary(): number {
		return this._anniversary;
	}

   
	public set anniversary(value: number) {
		this._anniversary = value;
	}

    public view(){
        super.view()
        console.log(`Account anniversary: ${this._anniversary}`);
    }


}