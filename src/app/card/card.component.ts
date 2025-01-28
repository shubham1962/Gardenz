import { Component, Input, OnInit} from '@angular/core';
import { Card } from '../card';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  posts: any[] = [];

  // constructor(private http: HttpClient, private apiCall:APIService) {

  // }

  constructor (private service:APIService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

cards: Card[]=[
  {
    
    name: 'Product 1',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    image: 'https://huge-garden.myshopify.com/cdn/shop/products/24.jpg?v=1496046150'
  },
  {
    name: 'Product 2',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    image: 'https://huge-garden.myshopify.com/cdn/shop/products/24.jpg?v=1496046150'
  },
  {
    name: 'Product 3',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    image: 'https://huge-garden.myshopify.com/cdn/shop/products/24.jpg?v=1496046150'
  },
  
];



// ngOnInit() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json()) // Convert response to JSON
//     .then(data => {
//       this.posts = data; // Ensure posts is an array
//       console.log("data",this.posts);
      
//     })
//     .catch(error => console.error('Error fetching posts:', error));
// }
}
