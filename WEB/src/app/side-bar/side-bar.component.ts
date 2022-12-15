import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public infogames(){
    this.router.navigate(['/info-games']);
  }

  public giveaways(){
    this.router.navigate(['/giveaways']);
  }
}
