import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/interfaces';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {}

  //para abiri el URL de la noticia y que lo rediriga a la pagina
  abrirNoticia(){
    console.log('Noticia', this.noticia.url);
  }

}
