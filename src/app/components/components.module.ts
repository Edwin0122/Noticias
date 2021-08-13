import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NoticiaComponent,
    NoticiasComponent
  ],
  exports:[
    HeaderComponent,
    NoticiasComponent
  ],

  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
