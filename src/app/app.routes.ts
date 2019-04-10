import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {Payment} from './payment/payment';
import {UserDetailPage} from './photo/user-detail.page';
import {UserListPage} from './photo/user-list.page';
import {JokePageComponent} from './joke/joke-page.component';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'joke', component: JokePageComponent},
    {path: 'payment', component: Payment},
    {path: 'users/list', component: UserListPage},
    {path: 'photo', component: UserDetailPage}

  ]
}];
