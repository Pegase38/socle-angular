import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getApiBaseUrl() {
    return 'http://localhost:8000/api/v1/';
  }

  getLoginRoute() {
    return ['login'];
  }

  getPostLoginDefaultRoute() {
    return ['home'];
  }
}
