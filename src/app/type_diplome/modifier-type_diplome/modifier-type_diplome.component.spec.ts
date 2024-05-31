import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierType_diplomeComponent } from './modifier-type_diplome.component';

describe('ModifierType-diplomeComponent', () => {
  let component: ModifierType_diplomeComponent;
  let fixture: ComponentFixture<ModifierType_diplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierType_diplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierType_diplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
