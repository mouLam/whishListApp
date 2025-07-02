import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishListShowComponent} from "./wish-list-show/wish-list-show.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FilterWishListComponent} from "./filter-wish-list/filter-wish-list.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    WishListShowComponent,
    WishListItemComponent,
    AddWishFormComponent,
    FilterWishListComponent
  ],
  exports: [
    WishListShowComponent,
    WishListItemComponent,
    AddWishFormComponent,
    FilterWishListComponent
  ]
})
export class WishModule { }
