import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MailsService } from '../services/mails.service'


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
    if(this.addUsersFormGroup?.value){
      this.mailsService.addUser(this.addUsersFormGroup.value.users);
    }
    this.router.navigate(["login"]);
  }
}


