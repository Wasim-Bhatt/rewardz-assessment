import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
isSortPanelOpen = false
sortDirection: 'asc' | 'desc' | null = null
products: Product[] = []
sortedProducts: Product[] = []

constructor(private productService: ProductService) {
  this.products = this.productService.getSampleData()
  this.sortedProducts = [...this.products]
}

toggleSortPanel() {
  this.isSortPanelOpen = !this.isSortPanelOpen
}

sortBy(direction: 'asc' | 'desc') {
  this.sortDirection = direction
}

applySort() {
  if (this.sortDirection) {
    this.sortedProducts = [...this.products].sort((a, b) =>
      this.sortDirection === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
  }
  this.toggleSortPanel()
 }
}
