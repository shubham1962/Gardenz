import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { product: Product; quantity: number }[] = [];

  constructor() { }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  // Get all cart items
  getCartItems(): { product: Product; quantity: number }[] {
    return this.cartItems;
  }

  // Increment quantity
  incrementQuantity(productId: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      item.quantity++;
    }
  }

  // Decrement quantity
  decrementQuantity(productId: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeItem(productId);
      }
    }
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
  }

  // Clear cart
  clearCart(): void {
    this.cartItems = [];
  }

}
