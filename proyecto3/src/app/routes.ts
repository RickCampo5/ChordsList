import {Routes} from '@angular/router';

//Componentes
import {AppComponent} from '../app/app.component';
import {AuthComponent} from '../app/auth/auth.component';
import {NavAndFooterComponent} from '../app/nav-and-footer/nav-and-footer.component';
import {ProfileComponent} from '../app/profile/profile.component'
import { NewSongComponent } from './new-song/new-song.component';

export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:AuthComponent},
  {path:'profile/:id', component:ProfileComponent},
  {path: 'createChords', component:NewSongComponent}
]