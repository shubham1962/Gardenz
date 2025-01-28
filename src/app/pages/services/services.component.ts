import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from '../../../route-animations';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [slideInAnimation]
})
export class ServicesComponent {
   @HostBinding('@routeAnimations') routeAnimations = true;

}
