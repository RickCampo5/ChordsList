import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { NavAndFooterComponent } from './nav-and-footer/nav-and-footer.component';
import { AuthComponent } from './auth/auth.component';

//Routes
import { routes } from './routes';
import { ProfileComponent } from './profile/profile.component'

//Services


@NgModule({
  declarations: [
    AppComponent,
    NavAndFooterComponent,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
