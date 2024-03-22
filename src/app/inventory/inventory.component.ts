import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  InventoryItem: any[] | undefined;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getProducts().subscribe(data => {
      this.InventoryItem = data;
      console.log('Inventory Items:', this.InventoryItem); // Log inventory items to console
    }); 
  }

  // Check if the product is expired
  isExpired(product: any): boolean {
    return new Date(product.expiryDate) < new Date();
  }

  // Check if the product is about to expire within a week
  isAboutToExpire(product: any): boolean {
    const expiryDate = new Date(product.expiryDate);
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    return expiryDate <= oneWeekFromNow && expiryDate >= new Date();
  }

  // Check if the product has a shelf life of more than 365 days
  isLongShelfLife(product: any): boolean {
    const manufactureDate = new Date(product.manufactureDate);
    const expiryDate = new Date(product.expiryDate);
    const shelfLifeInDays = (expiryDate.getTime() - manufactureDate.getTime()) / (1000 * 60 * 60 * 24);
    return shelfLifeInDays > 365;
  }

  // Get status text based on product's shelf life
  getStatus(product: any): string {
    if (this.isExpired(product)) {
      return 'Expired';
    } else if (this.isAboutToExpire(product)) {
      return 'About to Expire';
    } else if (this.isLongShelfLife(product)) {
      return 'Long Shelf Life';
    } else {
      return 'Shelf life not exceeded';
    }
  }
}
