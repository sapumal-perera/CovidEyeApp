import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SelectTypeComponent } from './select-type/select-type.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TravelHistoryComponent } from './travel-history/travel-history.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { ShareStatusComponent } from './share-status/share-status.component';
import {FormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import { VenueStatusComponent } from './travel-history/venue-status/venue-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterCorporateComponent } from './register-corporate/register-corporate.component';
import { QrCorporateComponent } from './qr-corporate/qr-corporate.component';
import { ClientQrComponent } from './client-qr/client-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SelectTypeComponent,
    RegisterComponent,
    UserProfileComponent,
    TravelHistoryComponent,
    ScanQrComponent,
    ShareStatusComponent,
    VenueStatusComponent,
    RegisterCorporateComponent,
    QrCorporateComponent,
    ClientQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [MatDialog],
  entryComponents: [VenueStatusComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
