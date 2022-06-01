import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from './views/dashboard/dashboard.component';
import { Preferences } from './views/preferences/preferences.component';
@NgModule({
  declarations: [AppComponent, Dashboard, Preferences],
  imports: [CommonModule, BrowserModule, AppRoutingModule, Preferences],
  exports: [AppRoutingModule, CommonModule, Preferences],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
