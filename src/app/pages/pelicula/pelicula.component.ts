import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movieDetails';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { StarRatingComponent } from 'ng-starrating';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {
  public peliculaDetalle:MovieDetails
  public cast: Cast[]=[]
  constructor(private activatedRouter: ActivatedRoute, private peliculasService:PeliculasService,
    private location :Location, private router: Router) { }

  ngOnInit(): void {
    const {id} = this.activatedRouter.snapshot.params
    combineLatest([
      this.peliculasService.getPeliculasDetalle(id),
      this.peliculasService.getCast(id)
        ]).subscribe(([peliculas, cast])=>{
          if(!peliculas){
            this.router.navigateByUrl('/home')
            return}
            this.peliculaDetalle = peliculas
            this.cast = cast.filter(actor => actor.profile_path != null)//enviar cast con foto diferente de null
        })
  }
    //calificacion de estrellas
    onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
      alert(`Old Value:${$event.oldValue}, 
        New Value: ${$event.newValue}, 
        Checked Color: ${$event.starRating.checkedcolor}, 
        Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    }
    regresar(){
      this.location.back()
    }

}
