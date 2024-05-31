import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeDepartementComponent } from './cree-departement.component';

describe('CreeDepartementComponent', () => {
  let component: CreeDepartementComponent;
  let fixture: ComponentFixture<CreeDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
