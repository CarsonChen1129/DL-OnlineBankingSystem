export class LoanApply{
    constructor(
        public fullName:string,
        public suffix: string,
        public citizen: String,
        public ssn: number,
        public dateOfBirth:string,
        public streetAddress: string,
        public city:string,
        public state:number,
        public zip:number,

        public monthlyPayment:number,
        public homePhone:string,
        public workPhone:number,
        public email:string,

        public employStatus:number,
        public annualIncome:number,
        public loanAmount:number,
        public term:number,
        public year:number,
        public make:number,
        public modelOfCar:number,
    ){}
}
