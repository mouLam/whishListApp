import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishList } from "../shared/wishList";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
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

  checkOrUncheck(wish: WishList): void {
    wish.isCompleted = !wish.isCompleted;
  }

}
