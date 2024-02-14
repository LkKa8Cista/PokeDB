import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DetailsComponent } from './components/details/details.component';
import { PokemonFilterComponent } from './components/pokemon-filter/pokemon-filter.component';
import { ShinyPokemonsComponent } from './components/shiny-pokemons/shiny-pokemons.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pokemon', component: PokemonComponent, canActivate: [AuthGuard] },
  { path: 'type', component: PokemonFilterComponent, canActivate: [AuthGuard]},
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard]},
  { path: 'shinys', component: ShinyPokemonsComponent, canActivate: [AuthGuard]},
  { path: 'search-results', component: SearchResultsComponent, canActivate: [AuthGuard]},
  { path: 'user', component: CreateUserComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
