"use strict";
var router_1 = require("@angular/router");
var cat_list_component_1 = require("./cats/cat-list.component");
var dog_list_component_1 = require("./dogs/dog-list.component");
// Route Configuration
exports.routes = [
    { path: 'cats', component: cat_list_component_1.CatListComponent },
    { path: 'dogs', component: dog_list_component_1.DogListComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map