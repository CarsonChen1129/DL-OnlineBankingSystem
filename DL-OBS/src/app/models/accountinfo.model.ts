export class AccountInfo {
    id: string;
    accountNumber: string;
    firstName: string;
    lastName: string;
    owner: string;
    balance: number;
    accountType: string;
    interestRate: number;
    routingNumber: string;

    constructor(id:string, accountNumber: string, firstName: string, 
        lastName: string, owner: string, balance: number, accountType: string, interestRate: number,routingNumber: string ) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
        this.interestRate = interestRate;
        this.routingNumber = routingNumber;
    }
    displayShortAccountNumber():string {
        const length: number = this.accountNumber.length;  
        return '(...' + this.accountNumber.substr(length - 4) + ')';
    }
}