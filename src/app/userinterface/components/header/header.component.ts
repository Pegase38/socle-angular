import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  @Input() isSignedIn: boolean;
  @Output() clickLogin = new EventEmitter();
  @Input() appName: string;
  constructor() {}

  ngOnInit() {}

  onClickLogin() {
    this.clickLogin.emit();
  }
}
