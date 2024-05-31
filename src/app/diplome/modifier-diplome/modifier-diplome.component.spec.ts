import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDiplomeComponent } from './modifier-diplome.component';

describe('ModifierDiplomeComponent', () => {
  let component: ModifierDiplomeComponent;
  let fixture: ComponentFixture<ModifierDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
