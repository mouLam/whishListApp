import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {

  @Input() wishText! : string;
  @Input() idx! : number;
  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  checkOrUncheck(): void {
    // In this next line, we can set input because it's an HTMLInputElement. Can't be managed ourselves
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
