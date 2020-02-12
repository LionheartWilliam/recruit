import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateRegisterComponent } from './admin-update-register.component';

describe('AdminUpdateRegisterComponent', () => {
  let component: AdminUpdateRegisterComponent;
  let fixture: ComponentFixture<AdminUpdateRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
