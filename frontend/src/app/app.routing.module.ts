// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadQuizComponent } from './user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './user/instructions/instructions.component';
import { SidebarComponent1 } from './user/sidebar/sidebar.component';
import { StartComponent } from './user/start/start.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './admin/veiw-categories/veiw-categories.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './admin/add-questions/add-questions.component';
import { NormalGuard } from './services/normal.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile', //not randring
    component: ProfileComponent, // Ensure ProfileComponent is accessible here 
  },
  {
    path: 'user/load-quiz',
    component: LoadQuizComponent, // Ensure ProfileComponent is accessible here
  },
  {
    path: 'user/instruction',
    component: InstructionsComponent, // Ensure ProfileComponent is accessible here
  },
  {
    path: 'user/sidebar',
    component: SidebarComponent1, // Ensure ProfileComponent is accessible here
  },
  {
    path: 'user/start',
    component: StartComponent, // Ensure ProfileComponent is accessible here
  },
  {
    path: 'user/user-dashboard',
    component: UserDashboardComponent, // Ensure ProfileComponent is accessible here
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        // path: 'view-questions/:qid/:title',
        // component: Viewquest,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: ':catId',
        component: LoadQuizComponent,
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },
    ],
  },
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
