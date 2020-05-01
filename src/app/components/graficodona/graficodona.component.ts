import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html'
})
export class GraficodonaComponent implements OnInit {

@Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
@Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
@Input('type') doughnutChartType: ChartType = 'doughnut';
@Input('leyenda') leyendaGrafico: 'Leyenda';

  constructor() { }

  ngOnInit(): void {
  }

}
