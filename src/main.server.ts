import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/layout/app.component';
import { config } from './app/core/layout/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
