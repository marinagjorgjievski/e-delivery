import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMasonryModule } from 'ngx-masonry';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

import { AdsComponent } from './component/ads/ads.component';
import { CompanyCardComponent } from './component/company-card/company-card.component';
import { BannerComponent } from './component/banner/banner.component';
import { AdsCompaniesComponent } from './component/ads/ads-companies/ads-companies.component';
import { HomeContentComponent } from './component/home/home-content/home-content.component';
import { FilteredCompanyComponent } from './component/filtered-company/filtered-company.component';
import { CheckByCompanyTypeComponent } from './component/filtered-company/check-by-company-type/check-by-company-type.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { CompanyComponent } from './component/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdsComponent,
    CompanyCardComponent,
    BannerComponent,
    AdsCompaniesComponent,
    HomeContentComponent,
    FilteredCompanyComponent,
    CheckByCompanyTypeComponent,
    CompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    NgxMasonryModule,
    MatTooltipModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
