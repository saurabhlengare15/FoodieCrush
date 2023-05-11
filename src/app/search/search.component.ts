import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item: string = '';
  iplength!:number;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['item'])
        this.item = params['item']
    })
  }
  search(): void {
    this.iplength = this.item.length
    if(this.iplength>0 && this.item){
      this.router.navigateByUrl('/search/'+this.item);
    }
    else
    this.router.navigateByUrl('/');
  }
}
