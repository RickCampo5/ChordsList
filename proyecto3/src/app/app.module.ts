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
import { ProfileComponent } from './profile/profile.component';
import { NewSongComponent } from './new-song/new-song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { NewListComponent } from './new-list/new-list.component';
import { SearchComponent } from './search/search.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { ListChordsComponent } from './list-chords/list-chords.component';

//Services


@NgModule({
  declarations: [
    AppComponent,
    NavAndFooterComponent,
    AuthComponent,
    ProfileComponent,
    NewSongComponent,
    SongDetailComponent,
    NewListComponent,
    SearchComponent,
    ListDetailComponent,
    FilterPipe,
    FooterComponent,
    ListChordsComponent
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
