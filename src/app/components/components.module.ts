import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CatSlideshowComponent } from './cat-slideshow/cat-slideshow.component';



@NgModule({
  declarations: [NavBarComponent, SlideshowComponent, PeliculasPosterGridComponent, CatSlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports:[NavBarComponent, SlideshowComponent, PeliculasPosterGridComponent,CatSlideshowComponent]
})
export class ComponentsModule { }
