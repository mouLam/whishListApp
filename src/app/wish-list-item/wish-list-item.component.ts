import {Component, Input} from '@angular/core';
import {WishList} from "../../shared/wishList";
import {EventBus} from "../../shared/services/eventBus";

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {

  @Input() wish! : WishList;
  @Input() idx! : number;

  constructor(private eventBus : EventBus) {}

  checkOrUncheck(): void {
    // In this next line, we can set input because it's an HTMLInputElement. Can't be managed ourselves
    this.wish.isCompleted = !this.wish.isCompleted;
  }

  removeWish() {
    this.eventBus.emit("removeWish", this.idx);
  }
}
