import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';

import { AuthService } from 'src/app/core/auth/services/auth.service';
import { ConfigService } from '../../../config/config.service';
import { Credential } from 'src/app/shared/models/auth/credential';
import { SessionService } from 'src/app/core/auth/services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router,
    private config: ConfigService,
    private messageService: MessageService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.session
      .onSignin()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Login sucess' });
        this.router.navigate(this.config.getPostLoginDefaultRoute());
      });
  }

  onLogin() {
    this.auth
      .signIn(new Credential(this.loginForm.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {}, () => this.messageService.add({ severity: 'error', summary: 'Login error' }));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
