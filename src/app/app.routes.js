"use strict";
var router_1 = require("@angular/router");
/* Imports Angular "core" library modules above and my stuff below */
var app_component_1 = require("./app.component");
var cat_list_component_1 = require("./cats/cat-list.component");
var dog_list_component_1 = require("./dogs/dog-list.component");
// Route Configuration
exports.routes = [
    {
        path: '',
        component: app_component_1.AppComponent // Remember to import the Home App Component
    },
    { path: 'cats', component: cat_list_component_1.CatListComponent },
    { path: 'dogs', component: dog_list_component_1.DogListComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map