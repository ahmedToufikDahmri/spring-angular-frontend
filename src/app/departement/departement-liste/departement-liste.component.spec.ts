import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementListeComponent } from './departement-liste.component';

describe('DepartementListeComponent', () => {
  let component: DepartementListeComponent;
  let fixture: ComponentFixture<DepartementListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
