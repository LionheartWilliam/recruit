import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRegisterComponent } from './print-register.component';

describe('PrintRegisterComponent', () => {
  let component: PrintRegisterComponent;
  let fixture: ComponentFixture<PrintRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
