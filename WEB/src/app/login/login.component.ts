import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var strPassword = document.getElementById("Contraseña");
    var btnLogin = document.getElementById("btnLogin");

    btnLogin!!.addEventListener("click", function() {
      var strUsername = document.getElementById("NombreUsuario");
      console.log(strUsername!!.textContent);
    });
  }

}
