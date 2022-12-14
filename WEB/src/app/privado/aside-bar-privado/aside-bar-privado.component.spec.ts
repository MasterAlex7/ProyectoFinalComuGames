import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarPrivadoComponent } from './aside-bar-privado.component';

describe('AsideBarPrivadoComponent', () => {
  let component: AsideBarPrivadoComponent;
  let fixture: ComponentFixture<AsideBarPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBarPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBarPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
