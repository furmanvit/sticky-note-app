import { Injectable } from '@angular/core';
import * as M from '../../app.models';

@Injectable()
export class LocalStorageService {
    get(key: string) {
        const data = localStorage.getItem(key);
        if (!data) {
            return undefined;
        } else {
            return JSON.parse(data);
        }
    }

    add(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    delete(key: string): void {
        localStorage.removeItem(key);
    }
}
