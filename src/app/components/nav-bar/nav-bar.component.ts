import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  buscarPaliculas(txtBuscar:string){
    txtBuscar = txtBuscar.trim()
    if(txtBuscar.length === 0){
        return
    }
    this.router.navigate(['/buscar', txtBuscar])
  }
}
