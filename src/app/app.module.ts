import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
/* imports Angular "core" library modules above and my stuff below */

// Declarations
import { AppComponent }         from './app.component';
import { CatListComponent }   from './cats/cat-list.component';
//import { CatDetailsComponent }  from './cats/cat-details.component'; // NOT YET
import { DogListComponent }      from './dogs/dog-list.component';
//import { DogDetailsComponent }  from './dogs/dog-details.component'; // NOT YET
//import { PetService }          from './pet.service'; // NOT YET
//import { Pet }          from './pet';
import { routing } from './app.routes';


/* TypeDecorator */
@NgModule({
  imports: [
    BrowserModule, // pulls basic directives like ngif & ngfor
    FormsModule,
    HttpModule, // helps us get and save data
    JsonpModule,
    routing
  ], // end imports
  declarations: [
    AppComponent,
    CatListComponent,
    //CatDetailsComponent, // NOT YET
    DogListComponent,
    //DogDetailsComponent // NOT YET
  ], // end declarations
  providers: [
    //PetService // NOT YET
  ],
  bootstrap: [ AppComponent ]
})
/* Export class */
export class AppModule {
    // code stub
} // Module class

