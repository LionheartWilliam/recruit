import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRegistersListComponent } from './private-registers-list.component';

describe('PrivateRegistersListComponent', () => {
  let component: PrivateRegistersListComponent;
  let fixture: ComponentFixture<PrivateRegistersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRegistersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRegistersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
