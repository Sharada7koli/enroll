import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Use only ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { EnrollComponent } from './enroll/enroll.component';
import { TableComponent } from './table/table.component';
import { ServiceService } from './shared/service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CourseListComponent } from './course-list/course-list.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { MattableComponent } from './mattable/mattable.component';
import {MatInputModule} from '@angular/material/input';
import { KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from 'src/demo';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';
import { EnrollmentSuccessComponent } from './enrollment-success/enrollment-success.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { UserService } from './user.service';
import { SequelizedemoformComponent } from './sequelizedemoform/sequelizedemoform.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { OnlineEventsComponent } from './online-events/online-events.component';
import { MatSelectModule } from '@angular/material/select';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // EnrollComponent,
    TableComponent,
    HomeComponent,
    CourseListComponent,
    EnrollmentComponent,
    MattableComponent,
    ConfirmationDialogComponentComponent,
    EnrollmentSuccessComponent,
    PaginationComponent,
    SequelizedemoformComponent,
    QrcodeComponent,
    OnlineEventsComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Use only ReactiveFormsModule
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    CommonModule,
    MatSnackBarModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule
  ],
  
  providers: [ServiceService,AuthService, KeycloakService,UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
