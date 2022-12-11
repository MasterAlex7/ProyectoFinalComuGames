import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var btn = document.getElementById("btn_login");
    var btn2 = document.getElementById("btn_sign-up");
  }
  
}
