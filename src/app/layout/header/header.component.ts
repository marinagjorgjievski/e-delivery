import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuTypeData } from 'src/app/data/menu-types';
import { CompanyModel, MenuTypeModel } from 'src/app/model/company-food/company-food.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() companies: CompanyModel;
  @Input() headerMenuTypes: MenuTypeModel[];

  total$: Observable<number>;
  opened = false;

  constructor() {
    this.headerMenuTypes = MenuTypeData.filter(menuType => menuType.showInHeader);
   }

  ngOnInit(): void {
  }

}
