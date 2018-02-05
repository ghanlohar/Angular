"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var product_router_module_1 = require("./product-router.module");
var products_component_1 = require("./products.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var product_service_1 = require("./product.service");
var product_detail_component_1 = require("./product-detail.component");
var product_guard_service_1 = require("./product-guard.service");
var convert_spaces_pipe_1 = require("./convert-spaces.pipe");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            product_router_module_1.ProductRouterModule
        ],
        declarations: [
            products_component_1.ProductsComponent,
            product_detail_component_1.ProductDetailComponent,
            product_filter_pipe_1.ProductFilterPipe,
            convert_spaces_pipe_1.ConvertToSpacesPipe
        ],
        providers: [
            product_service_1.ProductService,
            product_guard_service_1.ProductDetailGuard
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map