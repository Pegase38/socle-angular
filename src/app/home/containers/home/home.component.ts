import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.info('init du composant home!');
  }
}
