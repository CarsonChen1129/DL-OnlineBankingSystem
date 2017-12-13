export class Transaction {
    id: string;
    fromAccountNumber: string;
    toAccountNumber: string;
    owner: string;
    date: string;
    pending: boolean;
    amount: number;
    notes: string;

    constructor(id:string, fromAccountNumber: string, toAccountNumber: string, owner: string, date: string, pending: boolean, amount: number, notes:string ) {
        this.id = id;
        this.fromAccountNumber = fromAccountNumber;
        this.toAccountNumber = toAccountNumber;
        this.owner = owner;
        this.date = date;
        this.pending = pending;
        this.amount = amount;
        this.notes = notes;
    }

    displayShortLabel():string {
        return 'To Acct #' + this.toAccountNumber.substr(this.toAccountNumber.length - 4);
    }
}