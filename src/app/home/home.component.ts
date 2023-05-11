import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private FS: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['item'])
        this.foods = this.FS.getAllImages().filter(food => food.name.toLocaleLowerCase().includes(params['item'].toLocaleLowerCase()));
      else if (params['tag'])
        this.foods = this.FS.getAllFoodByTag(params['tag']);
      else
        this.foods = this.FS.getAllImages();
    })
    // this.foods = this.FS.getAllImages();
  }
}
