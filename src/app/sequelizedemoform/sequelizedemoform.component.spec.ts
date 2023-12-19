import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequelizedemoformComponent } from './sequelizedemoform.component';

describe('SequelizedemoformComponent', () => {
  let component: SequelizedemoformComponent;
  let fixture: ComponentFixture<SequelizedemoformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SequelizedemoformComponent]
    });
    fixture = TestBed.createComponent(SequelizedemoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
