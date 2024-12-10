import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProductCatagoriesComponent } from './components/product-catagories/product-catagories.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductCatagoriesComponent,
    ProductCardComponent
  ],
  imports: [CommonModule],
  exports: [
    MainComponent,
    ProductCatagoriesComponent,
    ProductCardComponent
  ],
})
export class HomeModule {}
