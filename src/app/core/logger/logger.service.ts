import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Service de log.
 * En production, on fera également un call à l'api de log.
 * En dev, on fera seulement un log dans console.log.
 * TODO : ajouter un mecanisme de log serveur pour la production
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  /**
   * Log une information : message. En production, appelle un service de loggin
   *
   * @param message le message à logger
   */
  info(message: string) {
    if (!environment.production) {
      console.log(this.formatMessage(message));
    }
  }

  /**
   * Log un message d'erreur : message. En production, appelle un service de loggin
   *
   * @param message le message à logger
   */
  error(message: string) {
    if (!environment.production) {
      console.error(this.formatMessage(message));
    }
  }

  /**
   * Ajoute la date au message
   *
   * @param message le message à formater
   */
  private formatMessage(message: string): string {
    return new Date() + ' : ' + message;
  }
}
