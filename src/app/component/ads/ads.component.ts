import { Component, Input, OnInit } from '@angular/core';
import { Ads } from 'src/app/model/company-food/company-food.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  @Input() ads: Ads;
  @Input() name: string;
  
  constructor() { }

  ngOnInit(): void {
  }
}
