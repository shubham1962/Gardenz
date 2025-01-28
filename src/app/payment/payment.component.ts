import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  imports: [RouterLink],
  templateUrl: './payment.component.html',
  standalone: true,
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private router: Router, private cartService: CartService) {}

  proceedToPay(): void {
    alert('Payment Successful! Thank you for shopping with us.');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

}
