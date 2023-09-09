import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private prdService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.prdService.getAllProducts().subscribe((prod: Product[]) => (this.products = prod));
  }
}
