import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CommunityComponent } from './pages/community/community.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'payment', component: PaymentComponent },

];
