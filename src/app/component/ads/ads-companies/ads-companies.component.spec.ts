import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCompaniesComponent } from './ads-companies.component';

describe('AdsCompaniesComponent', () => {
  let component: AdsCompaniesComponent;
  let fixture: ComponentFixture<AdsCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
