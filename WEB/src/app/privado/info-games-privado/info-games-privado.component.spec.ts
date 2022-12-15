import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGamesPrivadoComponent } from './info-games-privado.component';

describe('InfoGamesPrivadoComponent', () => {
  let component: InfoGamesPrivadoComponent;
  let fixture: ComponentFixture<InfoGamesPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGamesPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGamesPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
