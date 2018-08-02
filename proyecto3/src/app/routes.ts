import {Routes} from '@angular/router';

//Componentes
import {AppComponent} from '../app/app.component';
import {AuthComponent} from '../app/auth/auth.component';
import {NavAndFooterComponent} from '../app/nav-and-footer/nav-and-footer.component';
import {ProfileComponent} from '../app/profile/profile.component'
import { NewSongComponent } from './new-song/new-song.component';
import {SongDetailComponent} from './song-detail/song-detail.component'
import {SearchComponent} from './search/search.component'
import {NewListComponent} from './new-list/new-list.component'

export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:AuthComponent},
  {path:'profile/:id', component:ProfileComponent},
  {path: 'createChords', component:NewSongComponent},
  {path:'song/:id', component:SongDetailComponent},
  {path:'chords/:reg', component:SearchComponent},
  {path:'createList', component:NewListComponent}
]