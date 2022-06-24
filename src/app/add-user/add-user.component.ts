import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MailsService } from '../services/mails.service'
import { Mail, NewUsers, Users } from '../user-mails/user-mails';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUsersFormGroup!: FormGroup;
  

  constructor(
    private fb:FormBuilder,
    private mailsService: MailsService,
    public activatedrout: ActivatedRoute,public router: Router
    ) {}
   

  ngOnInit(): void {
    this.addUsersFormGroup = this.fb.group({
      users: this.fb.array([]),
    });
    
  }

  get users(): FormArray{
    return (this.addUsersFormGroup.get('users')) as FormArray;
  }

  getmails(index:number):FormArray{
    return (this.users.at(index).get('mails')) as FormArray;
  }

  addUser(): void{
    this.users.push(new FormGroup({
      email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    mails: new FormArray([]),
    }));
  }

  addMail(index:number): void{
    this.getmails(index).push(new FormGroup({
      sender:new FormControl('',Validators.required),
      subject:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
    }));
  }

  saveUsers(): void{
    // console.log("form group",this.addUsersFormGroup.value);
    const users: Users[]=[];
    if(this.addUsersFormGroup?.value){
      for(let user of this.addUsersFormGroup.value.users){
        const mails:Mail[]=[];
        for(let mail of user.mails){
          mails.push(new Mail(mail.sender,mail.subject,mail.message));
        }
        users.push(new Users(user.email,user.password,mails));
      }
      this.mailsService.addUser(new NewUsers(users));
    }
    this.router.navigate(["login"]);
  }
}


