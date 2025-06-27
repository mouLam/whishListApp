import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishList } from "../shared/wishList";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, FormsModule],
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
  filterValueSelected: string = "1";
  filteredWishes: WishList[] = this.wishes;

  checkOrUncheck(wish: WishList): void {
    wish.isCompleted = !wish.isCompleted;
  }

  addWish() {
    this.wishes.push(new WishList(this.newWishText));
    this.newWishText = "";
  }

  filterWishes(value: any) {
    if (value === "1") {
      this.filteredWishes = this.wishes;
    } else if (value === "2") {
      this.filteredWishes = this.wishes.filter(wish => wish.isCompleted);
    } else {
      this.filteredWishes = this.wishes.filter(wish => !wish.isCompleted);
    }
  }
}
