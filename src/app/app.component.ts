import { Component } from '@angular/core';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { OrderDisplayComponent } from './order-display/order-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductSelectionComponent, OrderDisplayComponent],
  template: `
    <h1>Product Order List</h1>
    <app-product-selection></app-product-selection>
    <app-order-display></app-order-display>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
