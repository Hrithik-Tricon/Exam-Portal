import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadQuizComponent } from './user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './user/instructions/instructions.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SidebarComponent1 } from './user/sidebar/sidebar.component';
import { StartComponent } from './user/start/start.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SignupComponent } from './signup/signup.component';
// import { WelcomeComponent } from './admin/welcome/welcome.component';
// import { ViewQuizzesComponent } from './admin/view-quizzes/view-quizzes.component';
import { ViewQuizQuestionsComponent } from './admin/view-quiz-questions/view-quiz-questions.component';
// import { ViewCategoriesComponent } from './admin/view-categories/view-categories.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { AddQuestionComponent } from './admin/add-questions/add-questions.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './admin/veiw-categories/veiw-categories.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
// import { ViewQuizzesComponent } from './admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { ViewQuizzesComponent } from './admin/view-quizzes/view-quizzes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin/teacher', component: TeacherComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user/load-quiz', component: LoadQuizComponent },
  { path: 'user/instructions', component: InstructionsComponent },
  { path: 'admin/sidebar', component: SidebarComponent },
  { path: 'user/sidebar', component: SidebarComponent1 },
  { path: 'user/start', component: StartComponent },
  { path: 'user/user-dashboard', component: UserDashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin/welcome', component: WelcomeComponent },
  { path: 'admin/view-quizzes', component: ViewQuizzesComponent },
  { path: 'admin/view-quiz-questions', component: ViewQuizQuestionsComponent },
  { path: 'admin/view-categories', component: ViewCategoriesComponent },
  { path: 'admin/update-quiz', component: UpdateQuizComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/add-quiz', component: AddQuizComponent },
  { path: 'admin/add-questions', component: AddQuestionComponent },
  { path: 'admin/add-category', component: AddCategoryComponent },
];
