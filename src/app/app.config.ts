import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "gardenz-fde71.firebaseapp.com",
  projectId: "gardenz-fde71",
  storageBucket: "gardenz-fde71.firebasestorage.app",
  messagingSenderId: "903003833694",
  appId: "1:903003833694:web:4b6223d0937954afef3bcf",
  measurementId: "G-6RLW21XE9V"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimations(),

  ],
};
