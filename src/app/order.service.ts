import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface OrderItem {
  product: string;
  quantity: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderItems = new BehaviorSubject<OrderItem[]>([]);

  getOrderItems() {
    return this.orderItems.asObservable();
  }

  updateOrderItems(items: OrderItem[]) {
    this.orderItems.next(items);
  }

  readOrder(): void {
    const items = this.orderItems.value;
    if (items.length === 0) {
      this.speak('Your order is empty.');
      return;
    }

    const text = items
      .map((item) => `${item.quantity} ${item.product}`)
      .join(', ');
    const fullText = `Your order is: ${text}`;
    this.speak(fullText);
  }

  speak(text: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  }
}
