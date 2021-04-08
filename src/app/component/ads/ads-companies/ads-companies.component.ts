import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ads, CompanyModel } from 'src/app/model/company-food/company-food.model';
import { AdsService } from 'src/app/service/ads.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-ads-companies',
  templateUrl: './ads-companies.component.html',
  styleUrls: ['./ads-companies.component.scss']
})
export class AdsCompaniesComponent implements OnInit {
  filteredCompanies: CompanyModel[];
  ad: Ads;
  id: number;
  subscription: Subscription;
  
  constructor(
    private adsService: AdsService,
    private homeService: HomeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params.id);
    this.ad = this.adsService.getAd(this.id);
    this.filteredCompanies = this.homeService.filterCompaniesByType(this.ad.name);
  }

}
