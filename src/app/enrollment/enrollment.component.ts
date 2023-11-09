import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { User } from '../user';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentSuccessComponent } from '../enrollment-success/enrollment-success.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']

})
export class EnrollmentComponent {
  title = 'Enrollment Form';
  topics = ['Angular', 'React', 'Vue', 'HTML', 'Java','Cloud Computing', 'AI','ML', 'Networking', 'Business Intelligence'];
  userForm: FormGroup;
userarray:User[]=[];
  constructor(private fb: FormBuilder, private router:Router, private enrService: ServiceService, private dialog:MatDialog) {
      this.userForm = this.fb.group({
          username: ['', Validators.required],
          email: ['', Validators.email],
          phone: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
          topic: [''],
          timepreference: [''],
          subscribe1: [false],
      });
      console.log('userdeatails--',this.userForm);
      
  }

  get valid(){
    return this.userForm.controls;
  }

  onSubmit() {
      
this.enrService.addEnrolls(this.userForm.value).subscribe(
  (result:any)=>{
  console.log(result);
  this.dialog.closeAll(); 
  this.openEnrollmentSuccessDialog();
  // this.router.navigate(['/table']);
},
(error) => {
  console.error('Error:', error);
}
);
}
openEnrollmentSuccessDialog() {
  this.dialog.open(EnrollmentSuccessComponent, {
    width: '300px',
    data: 'Enrolled Successfully!!',
  });
}

clearForm(){
  this.userForm.reset();
}
cancelForm(){
  this.dialog.closeAll();
}


}


