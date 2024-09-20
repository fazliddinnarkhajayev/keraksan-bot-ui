import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsComponent } from './bot-users.component';

describe('AdminsComponent', () => {
  let component: AdminsComponent;
  let fixture: ComponentFixture<AdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminsComponent]
    });
    fixture = TestBed.createComponent(AdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
