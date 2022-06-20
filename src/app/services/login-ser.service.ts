import { Injectable } from '@angular/core';
import { Users } from '../user-mails/user-mails';
import { MailsService } from './mails.service';

@Injectable({
  providedIn: 'root',
})
export class LoginSerService {
  user?: Users;

  loggingUser:Users= {} as Users;

  constructor(private mailsService: MailsService) {}
  public validate(): boolean {
    const users = this.mailsService.getUsers();
    const index = users.findIndex(
      (user: Users) =>
        user.email === this.loggingUser.email &&
        user.password === this.loggingUser?.password
    );
    if (index !== -1) {
      this.user = users[index];
      return true;
    } else {
      return false;
    }
  }

  updateLoginUser(email: string, password: string) {
    this.loggingUser.email = email;
    this.loggingUser.password = password;
  }
}
