import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [OverlayComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
