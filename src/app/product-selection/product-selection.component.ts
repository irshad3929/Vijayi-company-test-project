import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { OrderService, OrderItem } from '../order.service';

@Component({
  selector: 'app-product-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css'],
})
export class ProductSelectionComponent implements OnInit {
  products: string[] = [];
  quantities: number[] = [0, 1, 2, 3, 4, 5];
  selectedItems: OrderItem[] = [{ product: '', quantity: 0 }];

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addRow() {
    if (this.selectedItems.length < 8) {
      this.selectedItems.push({ product: '', quantity: 0 });
    }
  }

  removeRow(index: number) {
    if (this.selectedItems.length > 1) {
      this.selectedItems.splice(index, 1);
    }
  }

  showOrder() {
    const validItems = this.selectedItems.filter(
      (item) => item.product && item.quantity !== null
    );
    this.orderService.updateOrderItems(validItems);
  }
}
