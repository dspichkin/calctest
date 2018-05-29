import { Component, OnInit } from '@angular/core';

class CalAmount {
  amount: number;
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  cforms: CalAmount[] = [];
  generalResult = 0;

  constructor() { }

  ngOnInit() {
    this.add();
  }

  add() {
    this.cforms.push({
      amount: 0
    });
  }
  updateForm(obj) {
    this.cforms[obj.indexForm].amount = obj.serverAmount;
    this.generalCal();
  }

  generalCal() {
    this.generalResult = this.cforms.reduce((acc, obj) => {
      return acc + obj.amount;
    }, 0);
  }
}
