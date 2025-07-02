import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FilterWishListComponent} from "./filter-wish-list/filter-wish-list.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import {FormsModule} from "@angular/forms";
import {WishComponent} from "./wish.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    WishListShowComponent,
    WishListItemComponent,
    AddWishFormComponent,
    FilterWishListComponent,
    WishComponent
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
