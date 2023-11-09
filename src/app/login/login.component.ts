// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router'; 
// import { AuthService } from '../auth/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router, private authService: AuthService ) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       this.authService.setLoggedIn(true);
//       alert("Logged in Successfully");
//       this.router.navigate(['/enrollment']); 
//     } else {
//       alert('Please fix the errors before submitting.');
//     }
      
//   }
// }
