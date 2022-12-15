import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGamesComponent } from './info-games.component';

describe('InfoGamesComponent', () => {
  let component: InfoGamesComponent;
  let fixture: ComponentFixture<InfoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
