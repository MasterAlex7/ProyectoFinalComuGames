import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private  authservice : AuthService, private router : Router) {}

  ngOnInit(): void {
  }

  registrar() {
    let strUsername : string = "";
    let strPassword : string = "";
    var auxPassword = (<HTMLInputElement>document.getElementById("Contra_registrar"));
    var auxUsername = (<HTMLInputElement>document.getElementById("Name_registrar"));
    strUsername = auxUsername.value;
    strPassword = auxPassword.value;
    this.authservice.registrar(strUsername,strPassword).subscribe((data: any) => {
      console.log(data.intResponse);
      if(data.intResponse == 200){
        alert("Usuario registrado");
        this.router.navigate(['/login']);
      }
  });
  }

}
