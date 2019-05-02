import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MessageService } from 'primeng/components/common/messageservice';
import { MockComponent } from 'ng-mocks';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserinterfaceComponent } from './userinterface.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';

describe('UserinterfaceComponent', () => {
  let component: UserinterfaceComponent;
  let fixture: ComponentFixture<UserinterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [
        UserinterfaceComponent,
        MockComponent(HeaderComponent),
        MockComponent(FooterComponent),
        MockComponent(NavComponent)
      ],
      providers: [MessageService]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create a header', () => {
    const headerComp: HeaderComponent[] = fixture.debugElement
      .queryAll(By.directive(HeaderComponent))
      .map(el => el.componentInstance);

    expect(headerComp[0]).toBeTruthy();
  });

  test('should create a nav', () => {
    const navComp: NavComponent[] = fixture.debugElement
      .queryAll(By.directive(NavComponent))
      .map(el => el.componentInstance);

    expect(navComp[0]).toBeTruthy();
  });

  test('should create a footer', () => {
    const footerComp: FooterComponent[] = fixture.debugElement
      .queryAll(By.directive(FooterComponent))
      .map(el => el.componentInstance);

    expect(footerComp[0]).toBeTruthy();
  });
});
