import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDepartementComponent } from './afficher-departement.component';

describe('AfficherDepartementComponent', () => {
  let component: AfficherDepartementComponent;
  let fixture: ComponentFixture<AfficherDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
