import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;


const headers = new HttpHeaders({
  'x-api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //Infinite Scroll Normal
  headLinesPage= 0;
  //Infinite Scroll por categoria
  categoriaActual='';
  categoriaPage=0;

  constructor(private http: HttpClient) { }

        public ejecutarQuery<T>(query: string){

          query = apiUrl + query;
          return this.http.get<T>(query, {headers});

        }



      getNoticiaServices(){

        //ESTO FUE LO QUE LE CAMBIE PORQUE ANTES ESTABA EN ++
        this.headLinesPage+=1;

        return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=business&page=${this.headLinesPage}`);

      //return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/everything?q=keyword&apiKey=c65b1f8900324ef5a637980669414c63`);
      }

      getTopHeadlinesCategoria(categoria: string){
          //si la categoria acctual es exactamente igual que la categorria que resive por argumento carga la siguiente pagina
           if (this.categoriaActual===categoria) {
             this.categoriaPage+=1;
           }else{
            //Comentario
            //de lo contrario carga una nueva categoria
             this.categoriaPage=1;
             //Establecemos la categoria actual a la categoria que esta pidiendo
             this.categoriaActual=categoria;
           }

          return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);

        //return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c65b1f8900324ef5a637980669414c63`);
      }


}
