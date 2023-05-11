import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[] = []
  constructor(private FS:FoodService){}

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.FS.getAllTag();
  }
}
