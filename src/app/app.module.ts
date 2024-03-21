// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule separately
import { RouterModule } from '@angular/router'; // Import RouterModule

import { SideBarComponent } from './side-bar/side-bar.component'; // Import SideBarComponent if not already imported
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent, // Add SideBarComponent to declarations if not already added
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'side-bar', component: SideBarComponent },
      { path: 'inventory', component: InventoryComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
