import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  public movies:Movie[] = []
  peliculaBuscada:string
  constructor(private activatedRouter: ActivatedRoute,
    private peliculasServices:PeliculasService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      //console.log(params)
      this.peliculaBuscada = params.texto
      this.peliculasServices.buscarPeliculas(params.texto)      
      .subscribe(movies =>{
       // console.log(movies)
        this.movies = movies
      })
    })
    
  }

}
