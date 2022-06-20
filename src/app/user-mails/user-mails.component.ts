import { Component, Input, OnInit } from '@angular/core';
import { Users } from './user-mails';

@Component({
  selector: 'app-user-mails',
  templateUrl: './user-mails.component.html',
  styleUrls: ['./user-mails.component.scss']
})
export class UserMailsComponent implements OnInit {
  @Input() user?: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
