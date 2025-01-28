import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Importuj provideRouter
import { routes } from './app/app.routes'; // Importuj rute
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importuj AppComponent

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), provideAnimationsAsync(), // Koristi provideRouter umesto RouterModule.forRoot
  ],
}).catch(err => console.error(err));
