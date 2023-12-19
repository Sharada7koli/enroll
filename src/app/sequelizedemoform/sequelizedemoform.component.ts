import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sequelizedemoform',
  templateUrl: './sequelizedemoform.component.html',
  styleUrls: ['./sequelizedemoform.component.css']
})
export class SequelizedemoformComponent implements OnInit {

  userForm: FormGroup;
  title = 'User Form';
  successMessage: string | null = null;
  submittedData: any;
  editMode: boolean = false;
  userData: any;

  constructor(private userService: UserService, private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      user: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      name: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      user: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      name: ['', [Validators.required, Validators.email]],
    });
    // this.userForm.get('name')?.valueChanges.subscribe((name) => {
    //   if (name) {
    //     this.userService.getUserByName(name).subscribe(
    //       (userData) => {
    //         if (userData) {
    //           this.editMode = true;
    //           this.userForm.patchValue({
    //             user: userData.user,
    //             name: userData.name,
    //           });
    //           this.submittedData = userData;
    //         } else {
    //           console.error('User not found with name:', name);
    //           this.successMessage = 'Error: User not found with the entered name.';
    //         }
    //       },
    //       (error) => {
    //         console.error('Error fetching user data:', error);
    //         this.successMessage = 'Error fetching user data. Please try again.';
    //       }
    //     );
    //   }
    // });
  }


  onSubmit() {
    if (this.userForm.valid) {
      const userValues = this.userForm.value;
      this.userService.checkForDuplicate(userValues.user).subscribe(
        response => {
          if (response.isDuplicate) {
            console.error('Duplicate user found:', response.user);
            this.successMessage = 'Error: Duplicate user. Please choose a different username.';
          } else {
            if (this.editMode) {
              // Confirm before saving edited data
              const confirmEdit = confirm("Are you sure to save edited data?");
              if (confirmEdit) {
                this.userService.updateUser(this.submittedData.user, userValues).subscribe(
                  (response) => {
                    console.log('User updated successfully:', response.message);
                    this.successMessage = 'User updated successfully';
                    this.submittedData = userValues;
                    this.editMode = false;
                  },
                  (error) => {
                    console.error('Error updating user:', error);
                  }
                );
              }
            } else {
              this.userService.addUser(userValues).subscribe(
                (response) => {
                  console.log('User added successfully:', response);
                  this.successMessage = 'User added successfully';
                  this.submittedData = userValues;
                },
                (error) => {
                  console.error('Error adding user:', error);
                }
              );
            }
  
            this.clearForm();
          }
        },
        error => {
          console.error('Error checking for duplicate user:', error);
          this.successMessage = 'Error checking for duplicate user. Please try again.';
        }
      );
    }
  }

  clearForm() {
    this.userForm.reset();
  }

  onDelete() {
    // Confirm before deleting data
    const confirmDelete = confirm("Are you sure to delete the data?");
    if (confirmDelete && this.submittedData && this.submittedData.user) {
      const username = this.submittedData.user;
  
      this.userService.deleteUser(username).subscribe(
        (response) => {
          console.log('User deleted successfully:', response.message);
          this.successMessage = 'User deleted successfully';
          this.submittedData = null;
          this.clearForm();
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  onEdit() {
    this.editMode = true;
    this.userForm.setValue({
      user: this.submittedData.user,
      name: this.submittedData.name,
    });
  }

  onSearch() {
    const nameControl = this.userForm.get('name');
    if (nameControl) {
      const searchTerm = nameControl.value;
      if (searchTerm !== null && searchTerm !== undefined && searchTerm !== '') {
        this.userService.getUserByName(searchTerm).subscribe(
          (userData: any) => {
            if (userData) {
              this.editMode = true;
              this.userForm.patchValue({
                user: userData.user, 
                name: searchTerm, 
              });
              this.submittedData = userData;
              this.successMessage = 'User data found!';
            } else {
              this.editMode = false;
              this.successMessage = 'User data not found.';
            }
          },
          (error) => {
            console.error('Error fetching user data:', error);
            this.successMessage = 'Error fetching user data. Please try again.';
          }
        );
      } else {
        console.error('Search term is an empty string');
      }
    } else {
      console.error('Name control is null');
    }
  }
  
  
  
  
  
  
  
  
  



}
