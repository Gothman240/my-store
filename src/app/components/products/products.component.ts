import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [];

  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  }



  constructor(
    private storeService: StoreService,
    private productServices: ProductsService,
  ) { this.myShoppingCart = this.storeService.getshoppingCart() }

  ngOnInit(): void {
    this.productServices.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
  }



  onShowDetail(id: string) {
    this.productServices.getProduct(id)
      .subscribe(data => {
        /* this.toggleProductDetail(); */
        this.productChosen = data;

      })

  }


}