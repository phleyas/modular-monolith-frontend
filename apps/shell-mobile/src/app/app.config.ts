import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideApi } from '@frontend/open-api';
import { provideEffects } from '@ngrx/effects';
import { LocationsEffects, locationsFeature, SensorsEffects, sensorsFeature } from '@frontend/air-quality';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ sensors: sensorsFeature.reducer, locations: locationsFeature.reducer }),
    provideEffects([LocationsEffects, SensorsEffects]),
    provideHttpClient(withFetch()),
    provideApi({ basePath: API_BASE_URL_ANDROID_LOCAL }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
  ],
};
