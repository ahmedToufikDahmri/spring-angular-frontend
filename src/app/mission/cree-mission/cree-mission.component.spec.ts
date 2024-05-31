import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeMissionComponent } from './cree-mission.component';

describe('CreeMissionComponent', () => {
  let component: CreeMissionComponent;
  let fixture: ComponentFixture<CreeMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
