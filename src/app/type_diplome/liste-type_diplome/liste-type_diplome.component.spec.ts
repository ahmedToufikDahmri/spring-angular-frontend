import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeType_diplomeComponent } from './liste-type_diplome.component';

describe('ListeType_diplomeComponent', () => {
  let component: ListeType_diplomeComponent;
  let fixture: ComponentFixture<ListeType_diplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeType_diplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeType_diplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
