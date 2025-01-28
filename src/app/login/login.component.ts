import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as necessary
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string = '';
  form: any; // Add this line to declare the form property
  http = inject(HttpClient);

// userObj:any = {
//   EmailId:'',
//   Password:''
// };


userObj:any = {
  email:'',
  password:''
};

constructor( private router: Router, private authService: AuthService) {}

// onSubmit(){
//   this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.userObj).subscribe((res:any) => {
// if(res.result){
//   alert("Login Successful");
//   this.authService.login(this.userObj);
//   localStorage.setItem("user", JSON.stringify(this.userObj));
  
//   this.router.navigateByUrl(''); // Redirect to home page
// } else {
//   alert(res.message);
// }

// })
// }

// onSubmit(){
//   this.http.post("https://localhost:7025/login", this.userObj).subscribe((res:any) => {
// if(res.result){
//   alert("Login Successful");
//   this.authService.login(this.userObj);
//   localStorage.setItem("user", JSON.stringify(this.userObj));
  
//   this.router.navigateByUrl(''); // Redirect to home page
// } else {
//   alert(res.message);
// }

// })




// onSubmit(){
// this.authService.loginRequired(this.userObj).subscribe((res:any) => {
//   console.log("reslogin",res);
//   if(res.isSucess){
//     alert("Login Successful");
//     localStorage.setItem("user", JSON.stringify(this.userObj));
//     this.router.navigateByUrl(''); // Redirect to home page
//   } else {
//     alert(res.message);
//   }
// },(error:any) => {
//   console.log("error>>>>>",error);
// })
// }



onSubmit() {
  this.authService.loginRequired(this.userObj).subscribe(
    (res: any) => {
      console.log('reslogin', res);

      if (res.isSuccess) {
        alert('Login Successful');

        // Save token to localStorage
        localStorage.setItem('authToken', res.token);

        // Save user details to localStorage
        localStorage.setItem('user', JSON.stringify(this.userObj));
    

        // Redirect to homepage
        this.router.navigateByUrl('/');
      } else {
        alert(res.message);
      }
    },
    (error: any) => {
      console.error('error>>>>>', error);
      alert('Login failed. Please try again.');
    }
  );
}


}








