import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeType_diplomeComponent } from './cree-type_diplome.component';

describe('CreeType_diplomeComponent', () => {
  let component: CreeType_diplomeComponent;
  let fixture: ComponentFixture<CreeType_diplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeType_diplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeType_diplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
