import { Component } from '@angular/core';
import { ProductsService } from './Services/products-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'toyStore';
    products: any[];

    constructor(private producsService: ProductsService) { }

    public getAllProducts() {
        this.producsService.getAll().subscribe((data) => {
            if (data) {
                this.products = data;
            }
            else {
                this.products = null;
            }
        });
    }
}
