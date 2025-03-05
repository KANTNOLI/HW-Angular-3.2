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
  historyClick: number = -1;

  setSort(id: number) {
    if (id === this.historyClick) {
      this.carts.reverse()
    } else {
      switch (id) {
        case 1:
          this.carts.sort((a, b) => a.price - b.price);
          break;
        default: this.carts.sort()
      }
    }


    this.historyClick = id

  }

  setCarts() {
    console.log(1);

    this.carts = Carts.filter((cart) => cart.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))

    
    console.log(this.carts);
  }

}


console.log(Carts);
