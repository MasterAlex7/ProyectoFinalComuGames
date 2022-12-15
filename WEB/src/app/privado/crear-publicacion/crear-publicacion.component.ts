import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  opcionSeleccionado : string = "0";
  seleccionado: string = "";
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public capturar(){
     this.seleccionado = this.opcionSeleccionado 
  }

  public Enviar(){
    var titutlo = <HTMLInputElement>document.getElementById("titulo");
    var descripcion = <HTMLTextAreaElement>document.getElementById("descripcion");
    this.authservice.crearPublicacion(this.seleccionado, titutlo.value, descripcion.value).subscribe((resp: any) => {
      console.log(resp);
    });
    this.router.navigate(['/logeado']);
  }

}
