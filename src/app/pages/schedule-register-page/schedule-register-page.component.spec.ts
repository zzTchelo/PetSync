import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRegisterPageComponent } from './schedule-register-page.component';

describe('ScheduleRegisterPageComponent', () => {
  let component: ScheduleRegisterPageComponent;
  let fixture: ComponentFixture<ScheduleRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
