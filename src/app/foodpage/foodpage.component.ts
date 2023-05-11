import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private route: ActivatedRoute, private FS: FoodService, private cartService: CartService, private router: Router) { 
    this.route.params.subscribe((params) => {
      if (params['id'])
        this.food = FS.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {
    
  }

  addToCart() {
    this.cartService.addTocart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
