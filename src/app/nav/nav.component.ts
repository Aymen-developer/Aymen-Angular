import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
klasse="1Alinfo11"
kolor="red";

  constructor() { }

  ngOnInit(): void {
  }

  changecolor(){
    this.kolor='blue'
  }


  twoway(k:any){
    this.kolor=k
  }
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ];
}
