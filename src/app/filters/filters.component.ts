import { Component } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';
import { Carts } from '../carts/carts.component';

@Component({
  selector: 'app-filters',
  standalone: false,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  carts: Cart[] = Carts;
  search: string = ""
}


console.log(Carts);
