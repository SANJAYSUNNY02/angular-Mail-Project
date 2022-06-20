import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../user-mails/user-mails';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  
  users: BehaviorSubject<Users[]>;
  users$: Observable<Users[]>;

  constructor() { 
    this.users= new BehaviorSubject<Users[]>([]);
    this.users$= this.users.asObservable();
  }

  public addUser(users: Users[]):void{
    this.users.next(users);

  }
public getUsers():Users[]{
  return this.users.value;
}
  
}
