// inventory.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getProducts(): Observable<any[]> {
    // Hardcoded JSON data
    const products = [
      {
        "id": 2,
        "productName": "Lays Chips",
        "manufactureDate": new Date("2024-01-21T18:30:00.000+00:00"),
        "expiryDate": new Date("2024-05-21T18:30:00.000+00:00"),
        "price": 30.0,
        "previousSales": 15,
        "quantity": 20
      },
      {
        "id": 3,
        "productName": "Amul ghee",
        "manufactureDate": new Date("2024-01-21T18:30:00.000+00:00"),
        "expiryDate": new Date("2024-03-12T18:30:00.000+00:00"),
        "price": 35.0,
        "previousSales": 20,
        "quantity": 10
      },
      {
        "id": 1,
        "productName": "Parle Biscuit",
        "manufactureDate": new Date("2024-01-21T18:30:00.000+00:00"),
        "expiryDate": new Date("2024-03-23T18:30:00.000+00:00"),
        "price": 50.0,
        "previousSales": 10,
        "quantity": 50
      }
    ];

    // Return the data as an observable
    return of(products);
  }
}
