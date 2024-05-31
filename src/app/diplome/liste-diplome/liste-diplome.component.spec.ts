import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDiplomeComponent } from './liste-diplome.component';

describe('ListeDiplomeComponent', () => {
  let component: ListeDiplomeComponent;
  let fixture: ComponentFixture<ListeDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
