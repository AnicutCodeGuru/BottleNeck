import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProductService, PubSubService } from '../_services/index';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html',

    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: any[]=[];
    subscription: Subscription;

    constructor(
        private productService: ProductService,
        private pubSubService: PubSubService) { }
    
   

    ngOnInit() {
        this.loadProducts();
    }

    ngOnDestroy() {
       
    }
    loadProducts() {
        this.productService.getAll().subscribe(data => {
             for(let i=0;i<data.restaurants.length;i++){
                this.products.push(data.restaurants[i]);
             }
           
        });
    }
   
}