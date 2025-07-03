import {Component} from '@angular/core';
import {WishModule} from "./wish/wish.module";
import {ContactModule} from "./contact/contact.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'wishListApp';
}
