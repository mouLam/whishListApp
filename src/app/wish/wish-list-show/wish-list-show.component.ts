import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishList} from "../../../shared/wishList";
import {WishListItemComponent} from "../wish-list-item/wish-list-item.component";

@Component({
  selector: 'app-wish-list-show',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    WishListItemComponent
  ],
  templateUrl: './wish-list-show.component.html',
  styleUrl: './wish-list-show.component.scss'
})
export class WishListShowComponent {
  @Input() wishes: WishList[] = [];

}
