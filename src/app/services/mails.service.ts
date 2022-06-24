import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewUsers, Users } from '../user-mails/user-mails';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  
  users: BehaviorSubject<Users[]>;
  users$: Observable<Users[]>;

  constructor(public httpClient:HttpClient) { 
    this.users= new BehaviorSubject<Users[]>([]);
    this.users$= this.users.asObservable();
  }

  public addUser(users: NewUsers):void{
    this.httpClient.patch("https://mail-c542c-default-rtdb.firebaseio.com/users.json",users).subscribe();
    this.users.next(users.users);

  }
public getUsers():Observable<NewUsers>{
  // return this.users.value;
  return this.httpClient.get<NewUsers>("https://mail-c542c-default-rtdb.firebaseio.com/users.json");
}
  
}
