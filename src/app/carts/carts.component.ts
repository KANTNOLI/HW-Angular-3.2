import { Component } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';
import { RenderCarts } from '../../assets/RenderArrayCarts.module';

export const Carts: Cart[] = RenderCarts(6)

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  carts: Cart[] = Carts
}
