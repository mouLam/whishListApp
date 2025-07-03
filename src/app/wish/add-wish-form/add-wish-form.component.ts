import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishList} from "../../../shared/wishList";

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

  @Output() addNewWishEmit = new EventEmitter<WishList>;
  newWishText : string = "";

  addWish() {
    this.addNewWishEmit.emit(new WishList(this.newWishText));
    this.newWishText = "";
  }

}
