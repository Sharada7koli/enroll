// import { DialogRef } from '@angular/cdk/dialog';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ServiceService } from '../shared/service.service';
// import { User } from '../user';

// @Component({
//     selector: 'app-enroll',
//     templateUrl: './enroll.component.html',
//     styleUrls: ['./enroll.component.css']
// })
// export class EnrollComponent {
//     title = 'Enrollment Form';
//     topics = ['Angular', 'React', 'Vue'];
//     userForm: FormGroup;
//   userarray:User[]=[];
//     constructor(private fb: FormBuilder, private router:Router, private enrService: ServiceService, private _dialogRef: DialogRef<EnrollComponent>) {
//         this.userForm = this.fb.group({
//             username: ['', Validators.required],
//             email: ['', Validators.email],
//             phone: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
//             topic: [''],
//             timePreference: [''],
//             subscribe1: [false],
//         });
//         console.log('userdeatails--',this.userForm);
        
//     }
  
//     onSubmit() {
//         if (this.userForm.valid) {
//             const formValue = this.userForm.value;
//             this.userarray.push(formValue);
//             //console.log('array-',this.userarray);
//           this.enrService.addEnrolls(formValue).subscribe(
//             (result: any) => {
//                 console.log('result-',result);
//               alert('Enrolled Successfully');
//              this._dialogRef.close();
//             },

//           );
//         }
// }
// }
