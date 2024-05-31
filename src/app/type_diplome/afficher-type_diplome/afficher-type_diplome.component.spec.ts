import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherType_diplomeComponent } from './afficher-type_diplome.component';

describe('AfficherType_diplomeComponent', () => {
  let component: AfficherType_diplomeComponent;
  let fixture: ComponentFixture<AfficherType_diplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherType_diplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherType_diplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
