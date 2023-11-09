import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from '../login/login.component';
// import { EnrollComponent } from '../enroll/enroll.component';
import { TableComponent } from '../table/table.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { CourseListComponent } from '../course-list/course-list.component';
import { EnrollmentComponent } from '../enrollment/enrollment.component';
import { MattableComponent } from '../mattable/mattable.component';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'home'},
  // { path: 'login', component: LoginComponent},
  // { path:'enroll', component: EnrollComponent,
  // canActivate: [AuthGuard]},
  { path: 'table', component: TableComponent},
  { path: 'home', component: HomeComponent},
  { path: 'courses', component: CourseListComponent },
  
  { path:'enrollment', component:EnrollmentComponent,
    canActivate: [AuthGuard]},
  {path:'mattable', component:MattableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ TableComponent, HomeComponent, CourseListComponent,EnrollmentComponent]
