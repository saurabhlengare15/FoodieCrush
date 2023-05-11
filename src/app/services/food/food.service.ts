import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAllImages().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All')
      return this.getAllImages()
    else
      return this.getAllImages().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'FastFood', count: 6 },
      { name: 'Lunch', count: 9 },
      { name: 'Sweet', count: 2 },
      { name: 'Healthy', count: 1 },
      { name: 'Punjabi', count: 2 },
      { name: 'Breakfast', count: 2 },
      { name: 'Biryani', count: 2 },
      { name: 'Authentic', count: 2 },
      { name: 'Chicken', count: 2 }
    ]
  }

  getAllImages(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20 mins',
        price: 20,
        favourite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Pan Cakes',
        cookTime: '10-15 mins',
        price: 12,
        favourite: false,
        origins: ['Italy', 'Germany'],
        stars: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pancakes', 'Sweet']
      },
      {
        id: 3,
        name: 'Green Salad',
        cookTime: '10-12 mins',
        price: 5,
        favourite: true,
        origins: ['Australia'],
        stars: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Breakfast', 'Healthy', 'Salad']
      },
      {
        id: 4,
        name: 'Pasta',
        cookTime: '8-10 mins',
        price: 10,
        favourite: false,
        origins: ['Italy', 'France'],
        stars: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Pasta', 'Lunch']
      },
      {
        id: 5,
        name: 'Biryani',
        cookTime: '20-25 mins',
        price: 12,
        favourite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Authentic', 'Biryani', 'Lunch', 'Shahi']
      },
      {
        id: 6,
        name: 'Gulab Jamun',
        cookTime: '10-15 mins',
        price: 7,
        favourite: true,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Sweet', 'Family']
      },
      {
        id: 7,
        name: 'Samosa',
        cookTime: '8-10 mins',
        price: 4,
        favourite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Punjabi', 'Samosa', 'Lunch', 'Breakfast']
      },
      {
        id: 8,
        name: 'Chole Kulcha',
        cookTime: '15-20 mins',
        price: 14,
        favourite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['Punjabi', 'Authentic', 'Lunch']
      },
      {
        id: 9,
        name: 'Paneer Biryani',
        cookTime: '20-25 mins',
        price: 11,
        favourite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-9.jpg',
        tags: ['Shahee', 'Biryani', 'Lunch', 'Paneer']
      },
      {
        id: 10,
        name: 'Barbeque Chicken',
        cookTime: '10-20 mins',
        price: 6,
        favourite: false,
        origins: ['American'],
        stars: 4.5,
        imageUrl: '/assets/food-10.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch', 'Tasty']
      },
      {
        id: 11,
        name: 'Chicken Tikka',
        cookTime: '10-20 mins',
        price: 12,
        favourite: false,
        origins: ['india'],
        stars: 4.5,
        imageUrl: '/assets/food-11.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch', 'Starter']
      },
      {
        id: 12,
        name: 'Rajma Chawal',
        cookTime: '10-20 mins',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-12.jpg',
        tags: ['Family', 'Indian', 'Lunch', 'Rice']
      }
    ];
  }

}
