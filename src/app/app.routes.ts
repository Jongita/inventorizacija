import { Routes } from '@angular/router';

import { NewItemComponent } from './components/items/new-item/new-item.component';
import { NewEmpoloyeeComponent } from './components/employees/new-employee/new-employee.component';

export const routes: Routes = [
    {path:"employees/add", component:NewEmpoloyeeComponent},
    {path:"items/add",component:NewItemComponent}
];
