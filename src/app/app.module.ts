import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoriaComponent } from './categoria/categoria.component';
import { BuscaComponent } from './busca/busca.component';
import { ContaComponent } from './conta/conta.component';
import { IntroducaoComponent } from './introducao/introducao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CategoriaComponent,
    BuscaComponent,
    ContaComponent,
    IntroducaoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
