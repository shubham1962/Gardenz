import { Component, HostBinding } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { slideInAnimation } from '../../../route-animations';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [slideInAnimation]
})
export class HomeComponent {
 
@HostBinding('@routeAnimations') routeAnimations = true;


}
