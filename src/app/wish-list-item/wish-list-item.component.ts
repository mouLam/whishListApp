import {Component, EventEmitter, Input, Output} from '@angular/core';
import {eventBus} from "../../shared/services/eventBus";
import {WishList} from "../../shared/wishList";

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

  checkOrUncheck(): void {
    // In this next line, we can set input because it's an HTMLInputElement. Can't be managed ourselves
    this.wish.isCompleted = !this.wish.isCompleted;
  }

  removeWish() {
    eventBus.emit("removeWish", this.idx);
  }
}
