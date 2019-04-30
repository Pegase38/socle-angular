import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { Credential } from 'src/app/shared/models/credential';
import { SessionService } from 'src/app/core/services/session.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm: FormGroup;

  constructor(private auth: AuthService, private session: SessionService, private router: Router) {
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
        this.router.navigate(['/home']);
      });
  }

  onLogin() {
    this.auth.signIn(new Credential(this.loginForm.value));
    // TODO gestion des erreurs
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
