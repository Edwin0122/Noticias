import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  noticias: Article[]=[];


  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {

   this.cargarNoticias();
  }


  //InfiniteScrool
  loadData(event) {
    console.log(event);
    this.cargarNoticias(event);



  }



cargarNoticias(event?){

  this.noticiasService.getNoticiaServices()
    .subscribe(
      resp=>{
        console.log('tap1',resp);


        if (resp.articles.length===0) {
          event.target.disabled=true;
          event.target.complete();
          return;
        }

        this.noticias.push(...resp.articles);

        //si existe el evento que se complete para finalizar el InfiniteScroll
          if (event) {
            event.target.complete();
          }

      }
    );
}



}
