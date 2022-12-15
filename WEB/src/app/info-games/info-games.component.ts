import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-info-games',
  templateUrl: './info-games.component.html',
  styleUrls: ['./info-games.component.css']
})
export class InfoGamesComponent implements OnInit {

  games : any = []

  constructor(private authservices : AuthService) { }

  ngOnInit(): void {
    this.authservices.getGetFreeGames().subscribe((resp: any) => {
      this.games = resp;
    });
  }

}
