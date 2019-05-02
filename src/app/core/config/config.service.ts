import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private API_PROTOCOL = environment.apiProtocol;
  private API_HOST = environment.apiHost;
  private API_PORT = environment.apiPort;
  private API_BASE_PATH = environment.apiBasePath;

  getApiBaseUrl() {
    return `${this.API_PROTOCOL}://${this.API_HOST}:${this.API_PORT}/${this.API_BASE_PATH}`;
  }

  getLoginRoute() {
    return ['login'];
  }

  getPostLoginDefaultRoute() {
    return ['home'];
  }
}
