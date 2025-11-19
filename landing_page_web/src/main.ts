import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import '@angular/compiler';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()),

    importProvidersFrom(
      MarkdownModule.forRoot()
    ),
  ]
}).catch(err => console.error(err));
