import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    
    var btnLogin = document.getElementById("btnLogin");
    var servicio = <AuthService>this.authservice;
    btnLogin!!.addEventListener("click", function() {
      var strPassword = (<HTMLInputElement>document.getElementById("Contraseña"));
      var strUsername = (<HTMLInputElement>document.getElementById("NombreUsuario"));
      servicio.login(strUsername.value, strPassword.value).subscribe((data: any) => {
        console.log(data);
      });
    });
  }

}
