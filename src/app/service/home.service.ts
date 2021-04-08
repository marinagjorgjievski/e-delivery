import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { CompanyData } from '../data/companies';
import { CompanyModel } from '../model/company-food/company-food.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  companies = CompanyData;
  companyChanged = new Subject<CompanyModel[]>();
  viewCompany: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public filteredCompanies: CompanyModel[] = this.companies;

  constructor() { }

  //get comapnies
	getCompanies(): Observable<CompanyModel[]> {
    const tasks = of(CompanyData)
    return tasks;
	}

	getCompany(id:number): Observable<CompanyModel> {
    const company = CompanyData.find(company => company.id === id);
    return of(company);
	}

  filterCompaniesByType(menuType: string, companyTypes:string[] = []) {
		this.filteredCompanies = this.companies.filter(company => 
			company.menu.some(menu => menu.type.type === menuType)
		);
		if (companyTypes.length) {
			this.filteredCompanies = this.filteredCompanies.filter(company => 
				companyTypes.includes(company.company_type)
			);
		}
		this.companyChanged.next(this.filteredCompanies.slice());
		return this.filteredCompanies;
	}
}
