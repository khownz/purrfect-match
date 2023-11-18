import { Injectable } from "@angular/core";
import { Config } from "./config";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ConfigService {
    private config?: Config;

    constructor(private readonly http: HttpClient) {
    }

    load(): Observable<Config> {
        return this.http.get<Config>('assets/env.json').pipe(tap(config => {
            this.config = config;
        }));
    }

    public get(): Config {
        if (!this.config) {
            throw new Error('Configuration file "env.json" not loaded!');
        }

        return this.config;
    }
}
