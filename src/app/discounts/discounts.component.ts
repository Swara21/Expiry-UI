import { Component, OnInit } from '@angular/core';
import { DiscountItems } from '../discount-items';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {
  discountedProducts: DiscountItems[] = [];

  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {
    this.discountService.getDiscountedProducts().subscribe(data => {
      this.discountedProducts = data;
    });
  }
}
