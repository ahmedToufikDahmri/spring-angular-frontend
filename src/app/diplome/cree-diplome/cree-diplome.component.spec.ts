import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeDiplomeComponent } from './cree-diplome.component';

describe('CreeDiplomeComponent', () => {
  let component: CreeDiplomeComponent;
  let fixture: ComponentFixture<CreeDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
