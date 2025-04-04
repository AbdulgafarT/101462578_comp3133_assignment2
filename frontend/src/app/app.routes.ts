import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent }
];
