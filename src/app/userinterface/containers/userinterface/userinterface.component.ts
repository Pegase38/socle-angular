import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MenuItem } from 'primeng/components/common/menuitem';

import { SessionService } from 'src/app/core/auth/services/session.service';
import { ConfigService } from 'src/app/core/config/config.service';

@Component({
  selector: 'app-userinterface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent implements OnInit {
  isSignedIn$: Observable<boolean>;
  loggedUsername$: Observable<string>;
  appName = 'Socle angular';
  items: MenuItem[] = [
    {
      label: 'General',
      items: [
        {
          label: 'Home',
          routerLink: ['home']
        }
      ]
    }
  ];

  constructor(private session: SessionService, private router: Router, private config: ConfigService) {}

  ngOnInit() {
    this.isSignedIn$ = this.session.isSignedIn();
    this.loggedUsername$ = this.session.getUserId();
  }

  onClickLogin() {
    this.router.navigate(this.config.getLoginRoute());
  }
}
