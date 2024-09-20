import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasFormComponent } from './areas-form.component';

describe('AreasFormComponent', () => {
  let component: AreasFormComponent;
  let fixture: ComponentFixture<AreasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasFormComponent]
    });
    fixture = TestBed.createComponent(AreasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
