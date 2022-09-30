import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { countries } from '../../../../../../builder/src/app/views/editor/country';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
})
export class PhoneInputComponent implements OnInit {
  @Input() placeHolderText: any = '';
  @Input() btnText: any = '';
  @Output() callbackFunction = new EventEmitter();
  receiverText: string = '';
  senderView: boolean = true;
  editable: boolean = true;
  countriesObj = countries;
  selectedCountry = '';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  changeInputEvent(event: any) {
    if (event.target.value !== '') {
      document
        .getElementById('changeTextInputEventBtn')
        ?.removeAttribute('disabled');
      event.target.setAttribute('value', event.target.value);
    } else {
      document
        .getElementById('changeTextInputEventBtn')
        ?.setAttribute('disabled', 'true');
    }
    this.receiverText = event.target.value;
  }

  InputView() {
    this.callbackFunc(event);
    this.senderView = false;
  }

  hideInputUserView() {
    this.senderView = true;
  }

  callbackFunc(e: any) {
    if (this.editable === true) {
      this.callbackFunction.emit(e);
      this.editable = false;
    }
  }

  onSelected(Value: any): void {
    this.selectedCountry = Value.value;
    const ele = document.getElementById('tel-input');
    for (let index = 0; index < this.countriesObj.length; index++) {
      if (this.countriesObj[index].value === this.selectedCountry) {
        console.log(this.countriesObj[index].value);
        let num: any = this.countriesObj[index].value.match(/(\d+)/);
        ele?.setAttribute('value', num);
      }
    }
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
}
