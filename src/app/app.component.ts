import {Component, OnInit} from '@angular/core';
import {WishList} from "../shared/wishList";
import {FormsModule} from "@angular/forms";
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FilterWishListComponent} from "./filter-wish-list/filter-wish-list.component";
import {EventBus} from "../shared/services/eventBus";
import {WishListService} from "./wish-list.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListShowComponent, AddWishFormComponent, FilterWishListComponent],
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
