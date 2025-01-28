import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  user: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the user observable
    this.authService.user$.subscribe((user) => {
      this.user = user;
    }); 

    // Check for an existing user in localStorage on page load
    this.user = this.authService.getCurrentUser();
  }

 

  logout(): void {
    this.authService.logout(); // Clear user data and session
    this.user = null; // Reset the user variable
    this.router.navigate(['/login']); // Redirect to the login page
  }

  navItems = [
    {label: 'Home', route: '/'},
    {label: 'Shop', route: '/shop'},
    {label: 'Services', route: '/services'},
    {label: 'Blog', route: '/blog'},
    {label: 'Community', route: '/community'},
    {label: 'About Us', route: '/about-us'},
    {label: 'Contact', route: '/contact'}
  ];
}
