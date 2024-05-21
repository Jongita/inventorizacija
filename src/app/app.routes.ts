import { Routes } from '@angular/router';
import { NewItemComponent } from './components/items/new-item/new-item.component';
import { ListItemsComponent } from './components/items/list-items/list-items.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';

export const routes: Routes = [
    {path:"employees/add", component:NewEmployeeComponent},
    {path:"items/add",component:NewItemComponent},
    {path:"items/list", component:ListItemsComponent},
];
