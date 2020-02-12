import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterListComponent } from './admin-register-list.component';

describe('AdminRegisterListComponent', () => {
  let component: AdminRegisterListComponent;
  let fixture: ComponentFixture<AdminRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
