// This is our main file -- not our main app module, that's located in app/app.module

// Main imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// app module / environment
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// HMR
import { hmrBootstrap } from './hmr';

// checking env
if (environment.production) {
  enableProdMode();
}

// creating bootstrap
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// Checking env and launching
if (environment.hmr) {
  if (module[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}