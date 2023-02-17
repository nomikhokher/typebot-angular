import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent implements OnInit {
  @Input() data:any = '';
  @Output() nextStep = new EventEmitter();
  ratingArr:any = [];
  sendButton:boolean = false;
  defaultView:boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    for (let index = 0; index < this.data.options.length; index++) {
      this.ratingArr[index] = index;
    }
  }

  NextStep(){
    this.sendButton = false;
    this.defaultView = false;
    let el = document.getElementById('received-rating-value') as HTMLInputElement;
    el.classList.remove('hidden');
    this.nextStep.emit();
  }

  selectRating(e:any,check:string,index:number){
    if(check == 'svg'){
      for (let i = 0; i <= index; i++) {
        let el = document.getElementById(`fill-svg-${i}`) as HTMLInputElement;
        if(!el.classList.contains('selected-rating')){
          el.classList.add('selected-rating')
        }
      }
      if(index < this.ratingArr.length-1){
        for (let i = index+1 ; i < this.ratingArr.length; i++) {
          let el = document.getElementById(`fill-svg-${i}`) as HTMLInputElement;
          if(el.classList.contains('selected-rating')){
            el.classList.remove('selected-rating')
          }
        }
      }
    }else{
      for (let i = 0; i <= index; i++) {
        let el = document.getElementById(`button-svg-${i}`) as HTMLInputElement;
        if(!el.classList.contains('button-selected-rating')){
          el.classList.add('button-selected-rating')
        }
      }
      if(index < this.ratingArr.length-1){
        for (let i = index+1 ; i < this.ratingArr.length; i++) {
          let el = document.getElementById(`button-svg-${i}`) as HTMLInputElement;
          if(el.classList.contains('button-selected-rating')){
            el.classList.remove('button-selected-rating')
          }
        }
      }
    }
    this.sendButton = true;
    let el = document.getElementById('received-rating-value') as HTMLInputElement;
    el.innerText = (index+1).toString();
  }

}
