import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, OrderItem } from '../order.service';

@Component({
  selector: 'app-order-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css'],
})
export class OrderDisplayComponent implements OnInit {
  orderItems: OrderItem[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderItems().subscribe((items) => {
      this.orderItems = items;
    });
  }

  readOrder() {
    this.orderService.readOrder();
  }
}
