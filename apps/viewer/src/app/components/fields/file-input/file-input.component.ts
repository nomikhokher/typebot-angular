import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  NextStep(e:any){
    this.nextStep.emit();
  }

}
