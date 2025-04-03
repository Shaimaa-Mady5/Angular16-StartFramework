import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 
  images:string[]=[
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
  ]

  onChanging:boolean=false;
  
  changeImg:string=''

}

/* let layer = document.getElementById('layer')
console.log(layer); */
