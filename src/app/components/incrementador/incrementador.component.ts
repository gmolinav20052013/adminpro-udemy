import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtProgress') txtProgress: ElementRef;

 @Input('incrementador') progreso: number = 50;
 @Input('titulo') leyenda: string = '';

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  //  console.log('progreso', this.progreso);
   }

  ngOnInit(): void {
  //  console.log('progreso', this.progreso);
  }

  onChange(newValue: number){
   // console.log(newValue);

    // let elementHTML : any = document.getElementsByName('progreso')[0];
    // console.log(elementHTML.value);
    // console.log(this.txtProgress);




    if (newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarvalor(incremento: number) {

    // tslint:disable-next-line: no-conditional-assignment
    // tslint:disable-next-line: triple-equals
    if (this.progreso === 100 && incremento > 0) {
        return;
    }

    if (this.progreso === 0 && incremento < 0) {
      return;
  }

    this.progreso = Number(this.progreso) + incremento;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();

  }

}
