import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

   progreso1: number = 20;
   progreso2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }


  // cambiarvalor(number) {

  //   // tslint:disable-next-line: no-conditional-assignment
  //   // tslint:disable-next-line: triple-equals
  //   if (this.progreso === 100 && number > 0) {
  //       return;
  //   }

  //   if (this.progreso === 0 && number < 0) {
  //     return;
  // }

  //   this.progreso = Number(this.progreso) + number;

  // }



}
