import {Component} from '@angular/core';
import {WishList} from "../shared/wishList";
import {FormsModule} from "@angular/forms";
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FilterWishListComponent} from "./filter-wish-list/filter-wish-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListShowComponent, AddWishFormComponent, FilterWishListComponent],
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

  filter: any = () => {}; //To avoid undefined
}
