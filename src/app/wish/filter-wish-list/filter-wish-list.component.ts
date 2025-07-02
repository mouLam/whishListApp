import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishList} from "../../../shared/wishList";

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

  @Input() filteredWishesEmit : any;
  @Output() filteredWishesEmitChange = new EventEmitter<any>();
  filterValueSelected: any = "0";

  ngOnInit(): void {
    this.filterValueChange("0");
  }

  filterValueChange(value: any) {
    this.filterValueSelected = value
    // The next line is not break synchronization policy of Angular. The input must only be set by the parent
    // The children change the value via output
    //this.filteredWishesEmit = filters[this.filterValueSelected];
    this.filteredWishesEmitChange.emit(filters[this.filterValueSelected]);
  }

}
