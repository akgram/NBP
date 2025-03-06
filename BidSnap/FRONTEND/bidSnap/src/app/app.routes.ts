import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuctionListComponent } from './auction-list/auction-list.component';

export const routes: Routes = [
  { path: '', component: AuctionListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auction', component: AuctionListComponent },
];
