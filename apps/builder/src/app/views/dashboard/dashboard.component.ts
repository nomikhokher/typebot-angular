import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Preferences } from './preferences/preferences.component';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class Dashboard implements OnInit {
  constructor(private router: Router) {}
  popup: boolean = false;
  myAccount: boolean = true;
  myPreference: boolean = false;
  ngOnInit(): void {
    this.popup = false;
  }

  navigate(links: any[]) {
    this.router.navigate(links);
  }
  popUpSet() {
    this.popup = true;
  }
  myAccountDetail() {
    console.log('my account');
    this.myAccount = true;
    this.myPreference = false;
  }
  myPreferenceDetail() {
    console.log('my prefrence');

    this.myAccount = false;
    this.myPreference = true;
  }
}
