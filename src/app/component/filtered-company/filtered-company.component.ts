import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MenuTypeData } from 'src/app/data/menu-types';
import { CompanyModel, MenuTypeModel } from 'src/app/model/company-food/company-food.model';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-filtered-company',
  templateUrl: './filtered-company.component.html',
  styleUrls: ['./filtered-company.component.scss']
})
export class FilteredCompanyComponent implements OnInit {
  filteredCompanies: CompanyModel[];
  filteredCompanyTypes = [];
  company: CompanyModel;
  opened = false;
  id: number;
  menu: MenuTypeModel;
  type: string;
  company_type:string;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      const menuType = MenuTypeData.find(menuType => menuType.id == this.id);
      this.menu = menuType;
      this.type = menuType.type;
      this.filteredCompanies = this.homeService.filterCompaniesByType(this.type);
      console.log(this.filteredCompanies)
      this.filteredCompanyTypes = []; // first empty array
      this.filteredCompanies.forEach(company => {
        if(!this.filteredCompanyTypes.includes(company.company_type)){
          this.filteredCompanyTypes.push(company.company_type);
        }
      });
    });

    this.filteredCompanies.forEach(company => {
      if(!this.filteredCompanyTypes.includes(company.company_type)){
        this.filteredCompanyTypes.push(company.company_type);
      }
    });

    this.subscription = this.homeService.companyChanged
      .subscribe(
        (companies: CompanyModel[]) => {
          this.filteredCompanies = companies;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
