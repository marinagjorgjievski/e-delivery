import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Ads, CompanyModel } from 'src/app/model/company-food/company-food.model';
import { AdsService } from 'src/app/service/ads.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  ads: Ads[];
  subscription: Subscription;
  companies: CompanyModel[];

  //carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['<mat-icon>arrow_back_ios</mat-icon>', '<mat-icon>arrow_forward_ios</mat-icon>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(
    private adsService: AdsService,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.ads = this.adsService.getAds();
    this.subscription = this.homeService.getCompanies().subscribe(companies => this.companies = companies);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
