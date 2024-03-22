// import { Component, OnInit } from '@angular/core';
// import { InventoryService } from '../inventory.service';
// import { InventoryItem } from '../inventory-item';

// declare var google: any;

// @Component({
//   selector: 'app-graph-comp',
//   templateUrl: './graph-comp.component.html',
//   styleUrls: ['./graph-comp.component.css']
// })
// export class GraphCompComponent implements OnInit {

//   data: any[] = [];

//   constructor(private inventoryService: InventoryService) { }

//   ngOnInit(): void {
//     google.charts.load('current', { 'packages': ['corechart'] });
//     google.charts.setOnLoadCallback(this.drawChart.bind(this));
//   }

//   drawChart(): void {
//     this.inventoryService.getProducts().subscribe((products: InventoryItem[]) => {
//       const currentDate = new Date();
//       let expiredCount = 0;
//       let nonExpiredCount = 0;
//       let aboutToExpireCount = 0;

//       products.forEach(product => {
//         if (product.expiryDate < currentDate) {
//           expiredCount++;
//         } else if (product.expiryDate.getTime() - currentDate.getTime() <= 14 * 24 * 60 * 60 * 1000) {
//           aboutToExpireCount++;
//         } else {
//           nonExpiredCount++;
//         }
//       });

//       this.data = [
//         ['Status', 'Count'],
//         ['Expired', expiredCount],
//         ['Non-expired', nonExpiredCount],
//         ['About to expire', aboutToExpireCount]
//       ];

//       const chartData = google.visualization.arrayToDataTable(this.data);

//       const options = {
//         title: 'Inventory Status',
//         pieHole: 0.4,
//       };

//       const chart = new google.visualization.PieChart(document.getElementById('piechart'));
//       chart.draw(chartData, options);
//     });
//   }
// }
