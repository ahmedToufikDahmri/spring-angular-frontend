import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCompteComponent } from './afficher-compte.component';

describe('AfficherCompteComponent', () => {
  let component: AfficherCompteComponent;
  let fixture: ComponentFixture<AfficherCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
