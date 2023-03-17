import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from './views/dashboard/dashboard.component';
import { PreferencesModule } from './views/preferences/preferences.module';
import { AccSettingModule } from './views/acc-setting/acc-setting.module';
import { MembersModule } from './views/members/members.module';
import { BillingModule } from './views/billing/billing.module';
import { HeaderBarModule } from './views/header/header-bar.module';
import { CreateModule } from './views/create/create.module';

import { HttpClientModule } from '@angular/common/http';


/*Firebase*/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
/*Firebase End */

/* Enviroment File*/
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, Dashboard],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PreferencesModule,
    AccSettingModule,
    MembersModule,
    BillingModule,
    CreateModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
