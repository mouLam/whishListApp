import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishList} from "../../shared/wishList";

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {

  @Input() wishes: WishList[] = [];
  @Output() addNewWish = new EventEmitter<WishList>;
  newWishText : string = "";

  addWish() {
    this.addNewWish.emit(new WishList(this.newWishText));
    this.newWishText = "";
  }

}
