import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ScanQrComponent} from './scan-qr/scan-qr.component';
import {TravelHistoryComponent} from './travel-history/travel-history.component';
import {ShareStatusComponent} from './share-status/share-status.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {SelectTypeComponent} from './select-type/select-type.component';
import {RegisterCorporateComponent} from './register-corporate/register-corporate.component';
import {QrCorporateComponent} from './qr-corporate/qr-corporate.component';
import {ClientQrComponent} from './client-qr/client-qr.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'qr-scan', component: ScanQrComponent },
  { path: 'travel-history', component: TravelHistoryComponent },
  { path: 'share-status', component: ShareStatusComponent },
  { path: 'select-type', component: SelectTypeComponent },
  { path: 'register-corp', component: RegisterCorporateComponent },
  { path: 'qr-corp', component: QrCorporateComponent },
  { path: 'client-qr', component: ClientQrComponent },
  { path: '', component: WelcomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
