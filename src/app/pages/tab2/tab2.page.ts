import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

@ViewChild(IonSegment,{static:true}) segment: IonSegment;


  categorias=[
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology',
  ];

  noticias: Article[]=[];

  constructor( private noticiasService: NoticiasService) { }


  //traemos todos los datos del arreglo
  ngOnInit() {
    this.segment.value=this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }



  //Funcion para traer las categorias del json da acuerdo a los datos traidos del ngOnInit
  cambioCategoria(event){

    //console.log(event.detail.value);

    //llamamos al arreglo de noticias para cuando le demos click a alguna categoria nos traiga los datos de las mismas
    this.noticias= [];
    this.cargarNoticias(event.detail.value);

  }


  //Usamos esta funcion para traer todos los datos del json y luego meterlos en el ngOnInit con un this
  cargarNoticias(categoria: string, event?){

    this.noticiasService.getTopHeadlinesCategoria(categoria)
    .subscribe( resp=>{
      console.log('categorias',resp);
      this.noticias.push(...resp.articles);

      if (event) {
        event.target.complete();
      }


    });

  }


  //Infinite Scroll por categorias
  loadData(event){
    this.cargarNoticias(this.segment.value, event);
  }








}
