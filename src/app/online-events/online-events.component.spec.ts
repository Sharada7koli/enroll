import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEventsComponent } from './online-events.component';

describe('OnlineEventsComponent', () => {
  let component: OnlineEventsComponent;
  let fixture: ComponentFixture<OnlineEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineEventsComponent]
    });
    fixture = TestBed.createComponent(OnlineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
