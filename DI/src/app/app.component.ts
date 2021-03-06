import { Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent  {
  product: Product[];
  productService;

  constructor(){
    this.productService=new ProductService();
  }

  getProducts() {   
    this.product=this.productService.getProducts();
  }
  
}
