import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from "./contador/contador/contador.component";
import { ContadorModules } from './contador/contador.module';
import { HeroesModules } from './heroes/heroes.module';

// Tarea:

// Crear un modulo llamado ContdorModule
// declaraciones, y exportaciones

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
