import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCreateDialogComponent } from './create-register-dialog.component';

describe('RegisterCreateDialogComponent', () => {
  let component: RegisterCreateDialogComponent;
  let fixture: ComponentFixture<RegisterCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
