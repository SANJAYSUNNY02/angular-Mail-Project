import { Component, Input, OnInit } from '@angular/core';
import { LoginSerService } from '../services/login-ser.service';
import { MailsService } from '../services/mails.service';
import { Users } from '../user-mails/user-mails';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 users?: Users[];

 

  constructor(private mailsService: MailsService,
    private loginSerService: LoginSerService) { }
 
  ngOnInit(): void {
    this.mailsService.users$.subscribe((users: Users[]) => {
      const loginUser=this.loginSerService.user;
      this.users=users.filter((user:Users) => user.email === loginUser?.email && user.password===loginUser?.password );
console.log(users);
    })
  }

 
  

}
