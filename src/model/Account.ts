export abstract class Account {
  private _accountNumber: number;
  private _bankBranchNumber: number;
  private _type: number;
  private _holder: string;
  private _balance: number;

	constructor(accountNumber: number, bankBranchNumber: number, type: number, holder: string, balance: number) {
		this._accountNumber = accountNumber;
		this._bankBranchNumber = bankBranchNumber;
		this._type = type;
		this._holder = holder;
		this._balance = balance;
	}


	public get accountNumber(): number {
		return this._accountNumber;
	}

	public get bankBranchNumber(): number {
		return this._bankBranchNumber;
	}

	public get type(): number {
		return this._type;
	}

	public get holder(): string {
		return this._holder;
	}

	public get balance(): number {
		return this._balance;
	}

	public set accountNumber(value: number) {
		this._accountNumber = value;
	}

	public set bankBranchNumber(value: number) {
		this._bankBranchNumber = value;
	}

	public set type(value: number) {
		this._type = value;
	}

	public set holder(value: string) {
		this._holder = value;
	}

	public set balance(value: number) {
		this._balance = value;
	}

    public withdraw(value: number): boolean{
        if(value > this._balance){
            console.log('Insufficient balance.');
            return false;
        }
            
        this._balance -= value;
        return true;
    }

    public deposit(value: number){
        this._balance += value;
    }

    public view(){

        let type: string;

        switch (this._type) {
            case 1:
                type = 'Checking account.';
                break;
            case 2:
                type = 'Savings account.'
                break;
            default:
                type = 'Invalid Type'
                break;
        }
        console.log('\n*******************************************');
        console.log('               Account Details             ');
        console.log('*******************************************');
        console.log(`Account number: ${this._accountNumber}`);
        console.log(`Branch number: ${this._bankBranchNumber}`);
        console.log(`Account type: ${type}`);
        console.log(`Account holder's name: ${this._holder}`);
        console.log(`Account balance: ${this._balance}`);
    }

}
