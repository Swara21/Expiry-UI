import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { DiscountsComponent } from './discounts/discounts.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'discount', component: DiscountsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
