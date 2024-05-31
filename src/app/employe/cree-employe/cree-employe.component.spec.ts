import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeEmployeComponent } from './cree-employe.component';

describe('CreeEmployeComponent', () => {
  let component: CreeEmployeComponent;
  let fixture: ComponentFixture<CreeEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
