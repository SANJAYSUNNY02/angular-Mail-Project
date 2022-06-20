import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gmailnav',
  templateUrl: './gmailnav.component.html',
  styleUrls: ['./gmailnav.component.scss']
})
export class GmailnavComponent implements OnInit {

  constructor(public activatedrout: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
  }
  goToLogin(): void{
    this.router.navigate(["login"]);
  }

  goToHome(): void {
    this.router.navigate(["home"]);
  }
}
