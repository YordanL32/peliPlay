import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit , OnDestroy{
  public movies:Movie[] = []
  public movieSlideShow:Movie[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1300 
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)
    if(pos > max){
      if(this.peliculasServices.cargando){ return}
      this.peliculasServices.getCartelera().subscribe(movies =>{
        this.movies.push(...movies)
      })
    }
  }
  constructor(private peliculasServices: PeliculasService) {
    
    this.peliculasServices.getCartelera()
    .subscribe(movies =>{
      //console.log(resp.results)
      this.movies = movies
      this.movieSlideShow = movies
    })
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.peliculasServices.resetCarteleraPages()
  }
}
