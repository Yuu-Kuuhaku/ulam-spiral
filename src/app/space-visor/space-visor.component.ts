import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-visor',
  templateUrl: './space-visor.component.html',
  styleUrls: ['./space-visor.component.scss']
})
export class SpaceVisorComponent implements OnInit {

  @Input() value = 0;
  @Input() width = 0;
  @Input() height = 0;
  @Input() stepSize = 0;
  @Input() direction: null | 'up'| 'down'| 'left'| 'rigth' = null;


  showIcon = false;
  radio: number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {

    if(this.value && this.isPrime()){
      this.showIcon = true;
    } else {
      this.showIcon = false;
    }

    if(this.stepSize){
      this.radio = Math.sqrt(this.stepSize)
    }
  }

  private isPrime(){
    if(this.value == 1) return false;
    let primey = true;
    for (let i = 2; i <= Math.sqrt(this.value); i++){
      if(this.value % i == 0){
        primey = false;
        break;
      }
    }
    return primey;
  }
}
