import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class Dashboard implements OnInit {
  constructor(private router: Router) {}
  saveTypebotArray:any = [1,2,3];
  typeBotCounter:number = 3;
  menu: boolean = false;
  bill: boolean = false;
  popup: boolean = false;
  account: boolean = true;
  pref: boolean = false;
  setting: boolean = false;
  member: boolean = false;
  popup1: boolean = false;
  apiTokenModal:boolean = false;
  accountSaveBtn:boolean = false;
  workspace: any = [{
    name:"nomikhokher's workspace",
  }];

  ngOnInit(): void {
    this.popup = false;
    this.popup1 = false;
  }

  navigate(links: any[]) {
    this.router.navigate(links);
  }
  popUpSet() {
    this.popup = true;
  }
  popUpSet1() {
    this.popup1 = !this.popup1;
  }
  ClickedOut1(event: any) {
    console.log(event);

    if (
      event.target.className ===
      'sec-popup flex items-end sm:items-center justify-center mt-14 p-4 text-center sm:p-0'
    ) {
      this.popup1 = false;
      console.log('OuteSide Click');
    }
  }
  myAccount(ev:any) {
    this.account = true;
    this.pref = false;
    this.setting = false;
    this.member = false;
    this.bill = false;

    document.querySelectorAll('.active').forEach((element) => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    });
    ev.target.classList.add('active');
  }

  myPreference(ev:any) {
    this.pref = true;
    this.account = false;
    this.setting = false;
    this.member = false;
    this.bill = false;

    document.querySelectorAll('.active').forEach((element) => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    });

    ev.target.classList.add('active');
  }
  mySetting(ev:any) {
    this.setting = true;
    this.account = false;
    this.pref = false;
    this.member = false;
    this.bill = false;

    document.querySelectorAll('.active').forEach((element) => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    });
    ev.target.classList.add('active');
  }
  myMember(ev:any) {
    this.member = true;
    this.setting = false;
    this.account = false;
    this.pref = false;
    this.bill = false;

    document.querySelectorAll('.active').forEach((element) => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    });
    ev.target.classList.add('active');
  }
  myBilling(ev:any) {
    this.bill = true;
    this.member = false;
    this.setting = false;
    this.account = false;
    this.pref = false;

    document.querySelectorAll('.active').forEach((element) => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    });
    ev.target.classList.add('active');
  }
  menuOffOn() {
    console.log('menu click');

    this.menu = !this.menu;
    //this.popup1 = !this.popup1;
  }
  ClickedOut(event: any) {
    console.log(event);

    if (
      event.target.className ===
      'flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'
    ) {
      this.popup = false;
      console.log('OuteSide Click');
    }
  }

  saveTypeBot(){
    this.saveTypebotArray.push(this.typeBotCounter += 1);
    console.log(this.saveTypebotArray)
  }

  enableTokenBtn(event:any){
    if(event.target.value != ''){
      event.target.nextElementSibling.removeAttribute('disabled');
      event.target.nextElementSibling.classList.remove('bg-opacity-50');
      event.target.nextElementSibling.classList.add('hover:bg-blue-800');
    }else{
      event.target.nextElementSibling.setAttribute('disabled','disabled');
      event.target.nextElementSibling.classList.add('bg-opacity-50');
      event.target.nextElementSibling.classList.remove('hover:bg-blue-800');
    }
  }

  nameValidation(ev:any){
    if(ev.target.value == ''){
      this.accountSaveBtn = false;
    }else if(ev.target.value == ev.target.placeholder){
      this.accountSaveBtn = false;
    }
    else{
      this.accountSaveBtn = true;
    }
  }

  createWorkSpace(){
    this.workspace.push({
      name:'My Workspace'
    })
  }
}
