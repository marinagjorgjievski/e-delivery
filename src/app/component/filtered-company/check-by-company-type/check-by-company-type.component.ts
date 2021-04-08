import { Component, Input, OnInit } from '@angular/core';
import { CompanyModel } from 'src/app/model/company-food/company-food.model';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-check-by-company-type',
  templateUrl: './check-by-company-type.component.html',
  styleUrls: ['./check-by-company-type.component.scss']
})
export class CheckByCompanyTypeComponent implements OnInit {
  @Input() company: CompanyModel;
  @Input() menuType: string;
  @Input() filteredCompanyTypes: string[];
  companyTypesFilter: string[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    
  }

  onFilterByType(companyType:any) {
    if (this.companyTypesFilter.includes(companyType)) {
      const companyTypeIndex = this.companyTypesFilter.indexOf(companyType);
      if (companyTypeIndex > -1) {
        this.companyTypesFilter.splice(companyTypeIndex, 1);
      }
    } else {
      this.companyTypesFilter.push(companyType);
    }
    this.homeService.filterCompaniesByType(this.menuType, this.companyTypesFilter);
  }
  
  clear() {
    this.companyTypesFilter = [];
    this.homeService.companyChanged.next(this.homeService.filterCompaniesByType(this.menuType));
  }
}
