export class Account {
  private _accountNumber: number;
  private _bankBranch: number;
  private _type: number;
  private _holder: string;
  private _balance: number;

	constructor(accountNumber: number, bankBranch: number, type: number, holder: string, balance: number) {
		this._accountNumber = accountNumber;
		this._bankBranch = bankBranch;
		this._type = type;
		this._holder = holder;
		this._balance = balance;
	}


	public get accountNumber(): number {
		return this._accountNumber;
	}

	public get bankBranch(): number {
		return this._bankBranch;
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

	public set bankBranch(value: number) {
		this._bankBranch = value;
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
                type = 'Checking account ';
                break;
            case 2:
                type = 'Savings account.'
                break;
            default:
                type = 'Invalid Type'
                break;
        }
        console.log('*******************************************');
        console.log('               Account Details             ');
        console.log('*******************************************');
        console.log(`Account number: ${this._accountNumber}`);
        console.log(`Branch number: ${this._bankBranch}`);
        console.log(`Account type: ${type}`);
        console.log(`Account holder's name: ${this._holder}`);
        console.log(`Account balance: ${this._balance}`);
    }

}
