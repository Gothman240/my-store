import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = { 
    id: '',
    price: 0,
    image: '',
    title: '',
    description: '',
    category: '',
   }

   @Output() addProduct = new EventEmitter <Product> ()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addProduct.emit(this.product)
  }

}
