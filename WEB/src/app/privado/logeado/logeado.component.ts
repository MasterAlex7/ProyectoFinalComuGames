import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.component.html',
  styleUrls: ['./logeado.component.css']
})
export class LogeadoComponent implements OnInit {
  items : any = [];

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.authservice.getPublicaciones().subscribe((resp: any) => {
      console.log(resp);
      this.items = resp;
    });
  }

  public comentarios(id: number){
    console.log(id);
  }

}
