// inventory.component.ts
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
    });

  }
}
