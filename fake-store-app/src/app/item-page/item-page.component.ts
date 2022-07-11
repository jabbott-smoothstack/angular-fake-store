import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../ProductInterface';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  productId : number | undefined;
  productInfo: ProductInterface;

  constructor(activatedRoute: ActivatedRoute) { 
    this.productId = Number(activatedRoute.snapshot.url[1].path);
    fetch('https://fakestoreapi.com/products/' + this.productId)
    .then(res => res.json())
    .then(json => {
      this.productInfo = json;
    })
  }

  ngOnInit(): void {

  }

}
