export class User{
    constructor(
        public account:number,
        public email: string,
        public password: any,
        public confirmPassword: any,
        public name:string,
        public phone: number,
        public address:string,
    ){}
}   