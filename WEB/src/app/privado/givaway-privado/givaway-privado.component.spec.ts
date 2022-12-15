import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivawayPrivadoComponent } from './givaway-privado.component';

describe('GivawayPrivadoComponent', () => {
  let component: GivawayPrivadoComponent;
  let fixture: ComponentFixture<GivawayPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivawayPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivawayPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
