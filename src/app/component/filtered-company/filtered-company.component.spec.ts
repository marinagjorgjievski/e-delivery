import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCompanyComponent } from './filtered-company.component';

describe('FilteredCompanyComponent', () => {
  let component: FilteredCompanyComponent;
  let fixture: ComponentFixture<FilteredCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
