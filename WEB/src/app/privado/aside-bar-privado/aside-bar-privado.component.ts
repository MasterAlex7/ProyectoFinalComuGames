import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-bar-privado',
  templateUrl: './aside-bar-privado.component.html',
  styleUrls: ['./aside-bar-privado.component.css']
})
export class AsideBarPrivadoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public Cambiar(){
    this.router.navigate(['/crear-publicacion']);
  }

}
