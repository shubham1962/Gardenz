import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from '../../../route-animations';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  animations: [slideInAnimation]
})
export class BlogComponent {

  
 @HostBinding('@routeAnimations') routeAnimations = true;
}
