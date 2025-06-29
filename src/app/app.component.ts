import {Component} from '@angular/core';
import {WishList} from "../shared/wishList";
import {FormsModule} from "@angular/forms";
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";

const filters = [
  (wish : WishList) => wish,
  (wish : WishList) => wish.isCompleted,
  (wish : WishList) => !wish.isCompleted
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListShowComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wishListApp';
  wishes: WishList[] = [
    new WishList("Work about Angular"),
    new WishList("Build a house", true),
    new WishList("Make a coffee"),
  ];
  filterValueSelected: any = "0";

  get filteredWishes() : WishList[] {
    return this.wishes.filter(filters[this.filterValueSelected]);
  }
}
