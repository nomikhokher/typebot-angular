import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class Dashboard implements OnInit {

  saveTypebotArray:any = [
    {
      icon:'Default',
      name:'My Typebot',
      status:'not-live',
    },
    {
      icon:'😀',
      name:'My Typebot',
      status:'live',
    },
    {
      icon:'😂',
      name:'My Typebot',
      status:'not-live',
    },
    {
      icon:'🔧',
      name:'My Typebot',
      status:'live',
    },
  ];
  typeBotCounter:number = 3;
  settingMenu: boolean = false;
  bill: boolean = false;
  account: boolean = true;
  pref: boolean = false;
  setting: boolean = false;
  member: boolean = false;
  apiTokenModal:boolean = false;
  accountSaveBtn:boolean = false;
  folderPopup:boolean = false;
  settingPopup:boolean = false;
  workspace: any = [{
    name:"nomikhokher's workspace",
  }];

  constructor(private router: Router) {}

  ngOnInit(): void {}


  navigate(links: any[]) {
    this.router.navigate(links);
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

  settingMenuToggle() {
    this.settingMenu = !this.settingMenu;
  }

  saveTypeBot(){
    this.saveTypebotArray.push(this.typeBotCounter += 1);
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
      name:'My Workspace',
    })
    let data = this.workspace[this.workspace.length-1];
    let el = document.getElementById('update-workspace') as HTMLSpanElement;
    el.innerText = data.name;
  }

  replaceValue(ev:any){
    let el = document.getElementById('update-workspace') as HTMLSpanElement;
    el.innerText = ev.target.innerText;
  }

  handleOption(ev:any,key:any){
    document.querySelectorAll('.typebot-option').forEach((el:any)=>{
      el.classList.add('hidden');
    })
    document.querySelectorAll('.option-btn').forEach((btn:any)=>{
      btn.classList.remove('bg-gray-200');
    })
    document.querySelectorAll('.typebot-option').forEach((el:any)=>{
      if(key == el.getAttribute('data-option')){
        ev.target.classList.add('bg-gray-200');
        el.classList.remove('hidden');
      }
    })
  }

  @HostListener("document:click", ['$event'])
  clicked(event:any) {
    if(!event.target.classList.contains('dontHide')){
      document.querySelectorAll('.option-btn').forEach((btn:any)=>{
        btn.classList.remove('bg-gray-200');
      })
      document.querySelectorAll('.typebot-option').forEach((el:any)=>{
        el.classList.add('hidden');
      })
    }
  }

  duplicateWorkspace(typebot:any){
    this.saveTypebotArray.push({
      icon:typebot.icon,
      name:typebot.name,
      status:'not-live',
      key:this.saveTypebotArray.length,
    });
  }

  deleteWorkspace(index:any){
    this.saveTypebotArray.forEach((data:any,key:any) => {
      if(index == key){
        this.saveTypebotArray.splice(index,1);
      }
    });
  }
}



