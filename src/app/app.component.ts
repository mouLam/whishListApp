import {Component, OnInit} from '@angular/core';
import {WishList} from "../shared/wishList";
import {EventBus} from "../shared/services/eventBus";
import {WishListService} from "./wish/wish-list.service";
import {WishModule} from "./wish/wish.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'wishListApp';
  wishes: WishList[] = [];

  constructor(eventBus : EventBus, private wishListService : WishListService) {
    eventBus.listen("removeWish", (wishIdx: number) => {
      // remove the wish from item based on index
      this.wishes.splice(wishIdx, 1);
    })
  }

  ngOnInit(): void {
    this.wishListService.getWishes().subscribe((wishes : any) => {
      this.wishes = wishes;
    })
  }

  filter: any = () => {}; //To avoid undefined
}
