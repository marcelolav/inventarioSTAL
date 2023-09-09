import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, AddProductComponent, ListProductsComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {}
