import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ExpiredDashboardComponent } from './expired-dashboard/expired-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    InventoryComponent,
    DiscountsComponent,
    ExpiredDashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'side-bar', component: SideBarComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: '', component: MainContentComponent },
      { path: 'discount', component: DiscountsComponent },
      { path: 'expired', component: ExpiredDashboardComponent },

    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
