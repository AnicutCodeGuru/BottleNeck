import { Component } from '@angular/core';

import { ProductService } from './_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private productService: ProductService) {
  
    }
}