import { Injectable } from '@angular/core';
import { AdsData } from '../data/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  ads = AdsData;
  constructor() { }
  
	getAds() {
		return this.ads.slice();
	}

	getAd(id:number) {
	  return this.ads.find(ad => ad.id === id);
	}
}
