import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RandomPokemonsComponent } from './components/random-pokemons/random-pokemons.component';
import { DetailsComponent } from './components/details/details.component';
import { FormatIdPipe } from './pipes/format-id.pipe';
import { TypeColorPipe } from './pipes/type-color.pipe';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PokemonFilterComponent } from './components/pokemon-filter/pokemon-filter.component';
import { ShinyPokemonsComponent } from './components/shiny-pokemons/shiny-pokemons.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ResizeImageDirective } from './directives/resize-image.directive';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpInterceptorProviders } from './interceptors/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    PokemonComponent,
    RandomPokemonsComponent,
    DetailsComponent,
    FormatIdPipe,
    TypeColorPipe,
    SearchComponent,
    DashboardComponent,
    PokemonFilterComponent,
    ShinyPokemonsComponent,
    SearchResultsComponent,
    ResizeImageDirective,
    CreateUserComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
