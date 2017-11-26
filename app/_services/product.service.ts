import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor (
        private http: Http 
    ) {}

    getAll() {
        return this.getProducts();
    }
    private getProducts() {
        return this.http.get("../app/data/data.json")
        .map((res:Response) => res.json()); 
    }
    getByName() {
        return this.http.get("../app/data/data.json")
        .map((res:Response) => res.json()); 
    }

}