import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Ironman',
      canFly: true,
      color: Color.gold
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.white
    }
  ]

  public sortBy: keyof Hero | '' = '';

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero):void{
    console.log(value);
    this.sortBy = value;
  }
}
