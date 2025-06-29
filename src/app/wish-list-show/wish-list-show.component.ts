import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishList} from "../../shared/wishList";

@Component({
  selector: 'app-wish-list-show',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './wish-list-show.component.html',
  styleUrl: './wish-list-show.component.scss'
})
export class WishListShowComponent {
  @Input() wishes: WishList[] = [];
  @Input() filterValueSelected!: any;

  checkOrUncheck(wish: WishList): void {
    wish.isCompleted = !wish.isCompleted;
  }
}
