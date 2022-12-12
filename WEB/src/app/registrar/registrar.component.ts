import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private  authservice : AuthService) {}

  ngOnInit(): void {

    var btnRegistrar = document.getElementById("btnRegistrar");
    var servicio = <AuthService>this.authservice;

    btnRegistrar!!.addEventListener("click", function() {
      var strPassword = (<HTMLInputElement>document.getElementById("Contra_registrar"));
      var strUsername = (<HTMLInputElement>document.getElementById("Name_registrar"));
      /*servicio.registrar(strUsername.value, strPassword.value).subscribe((data: any) => {
        console.log(data);
      });*/
    });
  }

}
