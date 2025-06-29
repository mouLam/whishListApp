import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishList} from "../../shared/wishList";

const filters = [
  (wish : WishList) => wish,
  (wish : WishList) => wish.isCompleted,
  (wish : WishList) => !wish.isCompleted
];
@Component({
  selector: 'app-filter-wish-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './filter-wish-list.component.html',
  styleUrl: './filter-wish-list.component.scss'
})
export class FilterWishListComponent {

  @Output() filteredWishesEmit = new EventEmitter<any>();
  filterValueSelected: any = "0";

  ngOnInit(): void {
    this.filterValueChange("0");
  }

  filterValueChange(value: any) {
    this.filterValueSelected = value;
    this.filteredWishesEmit.emit(filters[this.filterValueSelected]);
  }

}
