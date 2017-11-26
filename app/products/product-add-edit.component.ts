import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, PubSubService } from '../_services/index';

// import slide in/out animation
import { slideInOutAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-add-edit.component.html',
    styles: [`
    agm-map {
      height: 180px;
    }
  `],

    // make slide in/out animation available to this component
    animations: [slideInOutAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    host: { '[@slideInOutAnimation]': '' }
})

export class ProductAddEditComponent implements OnInit {;
    product: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit() {
        let productName = String(this.route.snapshot.params['id']);
        this.product = this.loadProducts(productName);
       
    }

    loadProducts(productName:String) {
        this.productService.getByName().subscribe(data => {
          this.product= data.restaurants.filter(function(restaurant:any){
               if(restaurant.name === productName) {
                   return true;
               }else{
                   return false;
               }
            })[0];
            console.log(this.product);
        });
    }

    
}