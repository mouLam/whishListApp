import {Component} from '@angular/core';
import {WishList} from "../shared/wishList";
import {FormsModule} from "@angular/forms";
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";

const filters = [
  (wish : WishList) => wish,
  (wish : WishList) => wish.isCompleted,
  (wish : WishList) => !wish.isCompleted
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListShowComponent],
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
  newWishText: string = "";
  filterValueSelected: any = "0";

  addWish() {
    this.wishes.push(new WishList(this.newWishText));
    this.newWishText = "";
  }

  get filteredWishes() : WishList[] {
    return this.wishes.filter(filters[this.filterValueSelected]);
  }
}
