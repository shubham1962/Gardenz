# Gardenz Website 🌱

Gardenz is a web-based platform designed for gardening enthusiasts. It provides a comprehensive solution for shopping gardening tools, accessing services, reading blogs, and engaging with a community of gardeners.

## Features

### Frontend
1. **User Authentication**:
   - Login and Registration with JWT-based authentication.
   - Passwords are securely hashed using BCrypt.
2. **Navigation**:
   - Dynamic header with navigation links and user state handling.
   - Shopping cart icon is enabled only for logged-in users.
3. **Home Page**:
   - Overview of available products and services.
   - Call-to-action for joining the gardening community.
4. **Shop**:
   - Product browsing and filtering functionality.
   - Shopping cart and checkout feature with payment gateway integration.
5. **Community**:
   - A space for users to interact, share tips, and participate in discussions.
6. **Contact Us**:
   - A form for inquiries, integrated with `FormSubmit.co`.

   ## Technologies Used

### Frontend
- **Framework**: Angular 19
- **Styling**: Bootstrap 5, CSS
- **API Integration**: Angular HttpClient

### Backend
- **Framework**: .NET 8 (C#)
- **Database**: Microsoft SQL Server
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: BCrypt

# API Endpoints
## Authentication
-**Register: POST /api/auth/register**
-**Login: POST /api/auth/login**

## Products
-**Get All Products: GET /api/products**
-**Get Product by ID: GET /api/products/{id}**
-**Add Product: POST /api/products**
-**Update Product: PUT /api/products/{id}**
-**Delete Product: DELETE /api/products/{id}**
