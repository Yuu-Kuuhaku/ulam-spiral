import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  width: number = 700;
  height: number = 700;

  x: number= 0;
  y: number = 0;
  step = 1;

  spacies = new Array();

  stepSize = 10;
  numSteps = 1;
  state = 0;

  turnCounter = 0;
  totalSteps = 0;
  constructor() {
    this.width = innerWidth;
    this.height = innerHeight;

    if(this.width > this.height){
      this.width = this.height;
    } else {
      this.height = this.width
    }

    this.x = this.width /2;
    this.y = this.height / 2;



    const cols = this.width / this.stepSize;
    const rows = this.height / this.stepSize;

    this.totalSteps = cols * rows;
  }

  ngOnInit(): void {

   for (let i = 0; i < this.totalSteps; i++) {
    this.createSpacies();
   }

  }

  createSpacies(){
    const x = this.x;
    const y = this.y;
    let direction: null | 'up'| 'down'| 'left'| 'rigth' = null;

    switch (this.state) {
      case 0:
        this.x +=this.stepSize;
        direction = 'rigth';
        break;
      case 1:
        this.y -= this.stepSize;
        direction = 'up';
        break;
      case 2:
        this.x -= this.stepSize;
        direction = 'left';
        break;
      case 3:
        this.y += this.stepSize;
        direction = 'down';
        break;
    }

    this.spacies.push({
      x: x,
      y: y,
      value: this.step,
      direction
    })

    if(this.step % this.numSteps == 0 ){
      this.state = (this.state + 1 ) % 4;
      this.turnCounter++;

      if(this.turnCounter % 2 ==0 ){
        this.numSteps++;
      }
    }
    this.step++;
  }

}
