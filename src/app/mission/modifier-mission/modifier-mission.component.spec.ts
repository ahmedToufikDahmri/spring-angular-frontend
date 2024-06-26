import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMissionComponent } from './modifier-mission.component';

describe('ModifierMissionComponent', () => {
  let component: ModifierMissionComponent;
  let fixture: ComponentFixture<ModifierMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
