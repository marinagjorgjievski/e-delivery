import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckByCompanyTypeComponent } from './check-by-company-type.component';

describe('CheckByCompanyTypeComponent', () => {
  let component: CheckByCompanyTypeComponent;
  let fixture: ComponentFixture<CheckByCompanyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckByCompanyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckByCompanyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
