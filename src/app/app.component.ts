import {Component} from '@angular/core';
import {WishModule} from "./wish/wish.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'wishListApp';
}
