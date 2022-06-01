import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Setting } from './setting.component';
import { Preferences } from '../preferences/preferences.component';
@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, Preferences],
  exports: [CommonModule],
  providers: [],
  bootstrap: [Setting],
})
export class SettingModule {}
