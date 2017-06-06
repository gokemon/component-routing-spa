import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Imports Angular "core" library modules above and my stuff below */
import { AppComponent } from './app.component';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';


// Route Configuration
export const routes: Routes = [
   {
    path: '',
    component: AppComponent // Remember to import the Home App Component
  },
  { path: 'cats', component: CatListComponent },
  { path: 'dogs', component: DogListComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);