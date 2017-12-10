export class Contact {
    id: string;
    firstName: string;
    lastName: string;
    owner: string;
    accountNumber: string;
    routingNumber: string;
    accountType: string;

    constructor(id:string, firstName: string, lastName:string, owner:string, accountNumber:string, routingNumber:string,accountType:string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
        this.accountType = accountType;
    }
}