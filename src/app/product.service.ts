import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: string[] = [
    'Pencil',
    'Eraser',
    'Pens',
    'Notebook',
    'Stapler',
    'Tape',
    'Scissors',
    'Paper Clips',
  ];

  getProducts(): string[] {
    return this.products;
  }
}
