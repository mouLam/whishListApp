import {Component, OnInit} from '@angular/core';
import {WishList} from "../../shared/wishList";
import {EventBus} from "../../shared/services/eventBus";
import {WishListService} from "./wish-list.service";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FilterWishListComponent} from "./filter-wish-list/filter-wish-list.component";
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    AddWishFormComponent,
    FilterWishListComponent,
    WishListShowComponent
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent implements OnInit {

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
