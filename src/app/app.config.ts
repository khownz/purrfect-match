import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from "./core/config/config.service";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        {
            provide: APP_INITIALIZER,
            useFactory: (configService: ConfigService) => () => configService.load(),
            deps: [ConfigService],
            multi: true,
        },
    ]
};
