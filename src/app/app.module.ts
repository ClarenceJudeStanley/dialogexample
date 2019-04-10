import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {Payment} from './payment/payment';
import {JokePage} from './joke/joke-page';
import {JokeService} from '../services/joke.service';
import {UserListPage} from './photo/user-list.page';
import {UserDetailPage} from './photo/user-detail.page';
import {JokePageComponent} from './joke/joke-page.component';


@NgModule({
  declarations: [
    AppComponent,
    Payment,
    UserListPage,
    UserDetailPage,

    JokePageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
  ],
  providers: [AcademyService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
