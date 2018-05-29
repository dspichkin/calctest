import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BackService } from '../back.service';

@Component({
  selector: 'app-cal-form',
  templateUrl: './cal-form.component.html',
  styleUrls: ['./cal-form.component.css']
})
export class CalFormComponent implements OnInit {
  @Output() onChanged = new EventEmitter<any>();
  @Input() indexForm;

  numPowerClients = [];
  selectedNumPowerClients;
  numOfExternalSystems = [];
  selectedNumOfExternalSystems;
  numOfCoresInProc = [
    {
      cpu: '2CPU/2gb',
      mem: '2gb'
    }, {
      cpu: '2CPU/4gb',
      mem: '4gb'
    }, {
      cpu: '4CPU/8gb',
      mem: '8gb'
    }, {
      cpu: '8CPU/16gb',
      mem: '16gb'
    }
  ];

  amountMin = 200;
  serverAmount = 0;
  private powers = {
    '2gb': 100,
    '4gb': 200,
    '8gb': 500,
    '16gb': 900
  };

  selectedNumOfCoresInProc;

  constructor(private backService: BackService) {
    for (let i = 0; i <= 1000; i += 50) {
      this.numOfExternalSystems.push(i);
    }
    for (let i = 0; i <= 35; i += 1) {
      this.numPowerClients.push(i);
    }
  }

  ngOnInit() {
    this.selectedNumPowerClients =
      this.numPowerClients[1];
    this.selectedNumOfExternalSystems =
      this.numOfExternalSystems[1];
    this.selectedNumOfCoresInProc = this.numOfCoresInProc[0];
    this.calc();
  }

  calc() {
    this.backService.calc({
      amountMin: this.amountMin,
      selectedNumOfExternalSystems: this.selectedNumOfExternalSystems,
      selectedNumPowerClients: this.selectedNumPowerClients,
      power: this.powers[this.selectedNumOfCoresInProc.mem]
    }).subscribe(i => {
      this.serverAmount = i.result;
      this.onChanged.emit({
        serverAmount: this.serverAmount,
        indexForm: this.indexForm
      });
    });
  }
}
