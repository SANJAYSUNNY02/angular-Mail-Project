export interface Mail{
    sender:string;
    subject:string;
    message:string;
}
export interface Users{
    email: string;
    password: string;
    mails: Mail[];
}