import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewEmployeeComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventorizacija';
}