import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { Ej3Component } from './ej3/ej3.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';


@NgModule({
  declarations: [
    AppComponent,
    Ej3Component,
    Ejemplo1Component,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
