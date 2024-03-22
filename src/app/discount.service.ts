import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  getDiscountedProducts(): Observable<any[]> {
    // Hardcoded JSON data
    const discountedProducts = [
      {
        "productName": "Parle Biscuit_1",
        "updatedPrice": 25.0,
        "expiryInDays": 2,
        "discount": 50.0
      },
      {
        "productName": "Cadbury",
        "updatedPrice": 40.0,
        "expiryInDays": 365,
        "discount": 0.0
      },
      {
        "productName": "Parle Biscuit_2",
        "updatedPrice": 50.0,
        "expiryInDays": 365,
        "discount": 0.0
      },
      {
        "productName": "Amul ghee",
        "updatedPrice": 50.0,
        "expiryInDays": 15,
        "discount": 25.0
      }
    ];

    // Return the data as an observable
    return of(discountedProducts);
  }
}
