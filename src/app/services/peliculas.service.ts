import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera.response';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetails } from '../interfaces/movieDetails';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl:string = 'https://api.themoviedb.org/3'
  private carteleraPages = 1
  public cargando:boolean = false
  constructor(private http: HttpClient ) { }
  get params(){
    return {
      api_key: '09fd4db478d6e242421dbd2d497a1981',
      language: 'es-es',
      page: this.carteleraPages.toString()
    }
  }
  getCartelera():Observable<Movie[]>{
    if(this.cargando){ return of([])}
    this.cargando = true   
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
              }).pipe(
                map((resp) =>resp.results)
                ,tap( () =>{
                this.carteleraPages += 1
                this.cargando = false
                    }
              ))
  }
  buscarPeliculas(texto:string):Observable<Movie[]>{
    const params = {...this.params, page: '1', query: texto}
     return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
        params
      }).pipe(map(resp => resp.results))
  }
  resetCarteleraPages(){
    this.carteleraPages = 1
  }
  getPeliculasDetalle(id:string){
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    }).pipe(catchError(err => of(null)))
  }
  getCast(id:string):Observable<Cast[]>{
    return this.http.get<Credits>(`${this.baseUrl}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map(resp => resp.cast), 
      catchError(err => of([]))      
      )
  }
}
