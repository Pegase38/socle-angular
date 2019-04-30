import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  @Input() items: MenuItem[];
  constructor() {}

  ngOnInit() {}
}
