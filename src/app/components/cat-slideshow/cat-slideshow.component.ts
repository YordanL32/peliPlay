import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits';
import Swiper from 'swiper';

@Component({
  selector: 'app-cat-slideshow',
  templateUrl: './cat-slideshow.component.html',
  styleUrls: ['./cat-slideshow.component.css']
})
export class CatSlideshowComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() cast: Cast[]
  ngOnInit(): void {
    //console.log(this.cast)
  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView:5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }
}
