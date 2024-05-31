import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMissionComponent } from './afficher-mission.component';

describe('AfficherMissionComponent', () => {
  let component: AfficherMissionComponent;
  let fixture: ComponentFixture<AfficherMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
