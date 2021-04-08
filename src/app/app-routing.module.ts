import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsCompaniesComponent } from './component/ads/ads-companies/ads-companies.component';
import { FilteredCompanyComponent } from './component/filtered-company/filtered-company.component';
import { HomeContentComponent } from './component/home/home-content/home-content.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeContentComponent },
      {
        path: 'ad',
        children: [
          { path: ':id', component: AdsCompaniesComponent },
        ],
      },
      {
        path: 'filtered-food',
        children: [
          { path: ':id', component: FilteredCompanyComponent },
        ],
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
