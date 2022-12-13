import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    let strUsername : string = "";
    let strPassword : string = "";
    var auxPassword = (<HTMLInputElement>document.getElementById("Contraseña"));
    var auxUsername = (<HTMLInputElement>document.getElementById("NombreUsuario"));
    strUsername = auxUsername.value;
    strPassword = auxPassword.value;
    this.authservice.login(strUsername,strPassword).subscribe((data: any) => {
      if(data.intResponse != 200){
        alert("no existe el usuario; favor de registrare");
        this.router.navigate(['/registrar']);
      }else{
        alert("Login correcto");
        this.router.navigate(['/logeado']);
      }
  });
  }
}
