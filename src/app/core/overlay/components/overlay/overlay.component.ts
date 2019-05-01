import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  displayed$: Observable<boolean>;
  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.displayed$ = this.overlayService.isOverlayDisplayed();
  }
}
