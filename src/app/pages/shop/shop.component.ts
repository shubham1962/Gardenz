import { Component, HostBinding, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../route-animations';
import { Product } from '../../product';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  animations: [slideInAnimation]
})
export class ShopComponent implements OnInit {
  @HostBinding('@routeAnimations') routeAnimations = true;

  products: Product[] = [
    {
      id: 1,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 2,
      name: 'Trowel Tool',
      description: 'A durable trowel tool for planting and digging.',
      price: 30,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Tools',
    },
    {
      id: 3,
      name: 'Gardening Gloves',
      description: 'A pair of gardening gloves to keep your hands clean and safe.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Gardening Shears',
      description: 'A pair of gardening shears for trimming and cutting.',
      price: 40,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Tools',
    },
    {
      id: 5,
      name: 'Watering Can',
      description: 'A watering can to keep your plants hydrated.',
      price: 25,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 6,
      name: 'Gardening Hat',
      description: 'A gardening hat to protect you from the sun.',
      price: 15,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 7,
      name: 'Gardening Boots',
      description: 'A pair of gardening boots to keep your feet dry and clean.',
      price: 35,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 8,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 9,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 10,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 11,
      name: 'Watering Can',
      description: 'A watering can to keep your plants hydrated.',
      price: 25,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 12,
      name: 'Watering Can',
      description: 'A watering can to keep your plants hydrated.',
      price: 25,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 13,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 14,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 15,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 16,
      name: 'Gardening Shears',
      description: 'A pair of gardening shears for trimming and cutting.',
      price: 40,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Tools',
    },
    {
      id: 17,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 18,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 19,
      name: 'Gardening Apron',
      description: 'A gardening apron to keep your clothes clean.',
      price: 20,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 20,
      name: 'Watering Can',
      description: 'A watering can to keep your plants hydrated.',
      price: 25,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 21,
      name: 'Watering Can',
      description: 'A watering can to keep your plants hydrated.',
      price: 25,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Accessories',
    },
    {
      id: 22,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 23,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },
    {
      id: 24,
      name: 'Gardening Spray',
      description: 'A high-quality gardening spray to keep your plants fresh.',
      price: 50,
      image: 'https://huge-garden.myshopify.com/cdn/shop/products/22.jpg?v=1496045964',
      category: 'Indoor Plants',
    },



  ];
  searchQuery: string = ''; // Holds the search input value
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];

  itemsPerPage: number = 8; // Number of items per page
  currentPage: number = 1; // Current active page
  totalPages: number = 0; // Total number of pages
  totalPagesArray: number[] = []; // Array to create pagination buttons

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Initialize filtered products with all products
    this.filteredProducts = this.products;
    this.calculateTotalPages();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page after filtering
    this.calculateTotalPages();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  get PaginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }


  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }



  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

}
