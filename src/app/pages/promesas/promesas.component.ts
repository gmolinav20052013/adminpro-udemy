import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // let promesa = new Promise( (resolve, reject) => {

    //   let contador = 0;

    //   let intervalo = setInterval( () => {

    //     contador += 1;
    //     console.log( contador );

    //     if (contador === 3) {
    //       resolve('oK!');
    //     //   reject('Error de prueba');
    //       clearInterval(intervalo);
    //     }
    //   }, 1000);

    // });


    this.contarTres().then(
      // () => console.log('Termino')
      mensaje => console.log('Termino!', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error ));


  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {

   return new Promise( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;
        console.log( contador );

        if (contador === 3) {
          resolve(true);
        //   reject('Error de prueba');
          clearInterval(intervalo);
        }
      }, 1000);

    });

  }

}
