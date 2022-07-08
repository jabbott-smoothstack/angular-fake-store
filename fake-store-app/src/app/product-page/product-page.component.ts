import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../ProductInterface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productCategories: []
  filteredProducts: ProductInterface[]
  uri: string

  constructor() { 
    this.productCategories = [];
    this.filteredProducts = [];
    this.uri = "";
  }

  ngOnInit(): void {

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>{
      this.productCategories = json;
    });

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
      this.filteredProducts = json;
    });
  }

  fetchItemsFromCategory(categoryName : string) : void {
    
    if(categoryName == 'all') {
      this.uri = 'https://fakestoreapi.com/products';
    }
    else {
      this.uri = 'https://fakestoreapi.com/products/category/' + categoryName;
    }

    fetch(this.uri)
      .then(res=>res.json())
      .then(json=> {
        this.filteredProducts = json;
      });
  }
}
