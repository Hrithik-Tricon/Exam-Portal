import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, ROUTES } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptor } from './services/auth.interceptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { routes } from './app.routes';
// import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddQuestionComponent } from './admin/add-questions/add-questions.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './admin/veiw-categories/veiw-categories.component';
import { ViewQuizQuestionsComponent } from './admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TeacherComponent } from './admin/teacher/teacher.component';
// import { FormsModule } from '@angular/forms'; // For ngModel
// import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
// import { MatInputModule } from '@angular/material/input'; 

const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    CKEditorModule,
    NgxUiLoaderModule,
    ...httpInterceptorProviders,
    provideAnimationsAsync(),
    TeacherComponent
  ],
};

