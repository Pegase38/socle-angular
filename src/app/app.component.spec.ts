import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { UserinterfaceComponent } from './userinterface/containers/userinterface/userinterface.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(UserinterfaceComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create the userinterface', () => {
    const userInterfaceComp: UserinterfaceComponent[] = fixture.debugElement
      .queryAll(By.directive(UserinterfaceComponent))
      .map(el => el.componentInstance);

    expect(userInterfaceComp[0]).toBeTruthy();
  });
});
