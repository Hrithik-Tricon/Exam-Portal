import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideForms } from '@angular/forms';
import { provideMatFormField } from '@angular/material/form-field';
import { provideMatButton } from '@angular/material/button';
import { provideMatInput } from '@angular/material/input';
import { provideMatSnackBar } from '@angular/material/snack-bar';
import { provideMatCard } from '@angular/material/card';
import { provideMatToolbar } from '@angular/material/toolbar';
import { provideMatIcon } from '@angular/material/icon';
import { provideMatList } from '@angular/material/list';
import { provideMatSlideToggle } from '@angular/material/slide-toggle';
import { provideMatSelect } from '@angular/material/select';
import { provideMatProgressSpinner } from '@angular/material/progress-spinner';
import { authInterceptorProviders } from './services/auth.interceptor';
import { provideCKEditor } from '@ckeditor/ckeditor5-angular';
import { provideNgxUiLoader } from 'ngx-ui-loader';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([authInterceptorProviders])
    ),
    provideAnimations(),
    provideForms(),
    provideMatFormField(),
    provideMatButton(),
    provideMatInput(),
    provideMatSnackBar(),
    provideMatCard(),
    provideMatToolbar(),
    provideMatIcon(),
    provideMatList(),
    provideMatSlideToggle(),
    provideMatSelect(),
    provideMatProgressSpinner(),
    provideCKEditor(),
    provideNgxUiLoader({
      showForeground: true,
    }), provideAnimationsAsync(),
  ],
};

