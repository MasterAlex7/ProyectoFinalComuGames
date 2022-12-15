import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-giveaways',
  templateUrl: './giveaways.component.html',
  styleUrls: ['./giveaways.component.css']
})
export class GiveawaysComponent implements OnInit {


  //declarar matriz de sorteos
  sorteo : any = []
  titulo : string = "";
  instrucciones : string = "";
  url : string = "";

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.authservice.getGetGiveaways().subscribe((resp: any) => {
      this.sorteo = resp;
      console.log(this.sorteo.title);
      console.log(this.sorteo.instructions);
      console.log(this.sorteo.gamerpower_url);
      this.titulo = this.sorteo.title;
      this.instrucciones = this.sorteo.instructions;
      this.url = this.sorteo.gamerpower_url;
    });
    
  }

}
