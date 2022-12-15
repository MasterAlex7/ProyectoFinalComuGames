import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items : any = [];
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.authservice.getPublicaciones().subscribe((resp: any) => {
      console.log(resp);
      this.items = resp;
    });
  }

  
}
