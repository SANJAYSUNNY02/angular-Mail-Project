export class Mail{
    constructor(public sender:string,
       public subject:string,
        public message:string){

        }
}
export class Users{
    
    constructor(public email: string,
        public password: string,
        public mails: Mail[]){

    }
}
export class NewUsers{
constructor(public users:Users[]){

}
}
