import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-games-privado',
  templateUrl: './info-games-privado.component.html',
  styleUrls: ['./info-games-privado.component.css']
})
export class InfoGamesPrivadoComponent implements OnInit {

  games : any = []

  constructor(private authservices : AuthService) { }

  ngOnInit(): void {
    this.authservices.getGetFreeGames().subscribe((resp: any) => {
      this.games = resp;
    });
  }

}
