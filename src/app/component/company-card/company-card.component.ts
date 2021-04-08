import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyModel } from 'src/app/model/company-food/company-food.model';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company: CompanyModel;

  constructor(
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  companyView(id: number) {
    this.router.navigate(['/home/company'], {
      queryParams: {
        cid: id
      }
    });
    this.homeService.viewCompany.next(id);
  }
}
