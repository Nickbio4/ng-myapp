import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: '/about'
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact'
    }
  ];
}
