import {AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { FuncsService } from '../services/funcs.services';
import table1data from './inv-table1.json';
import table2data from './inv-table2.json';
import stackdata from './inv-stack.json';


@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.css']
})
export class InvestorSummaryComponent implements OnInit {
  constructor(private funcs: FuncsService) { 
    
  } 
  
  ngOnInit(): void {
    this.funcs.ConvertDataTable(stackdata,this.stackChart);
    this.funcs.ConvertDataTable(table1data,this.table1Chart);
    this.funcs.ConvertDataTable(table2data,this.table2Chart,true);
  }
  public stackChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable:  [],
    options: {
       isStacked: true,
       legend: { position: 'top' },
       width: '100%',
       height: '250',
      },
  };
  public table1Chart: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [],
    options: {
      width: '100%',
      height: '250',
      allowHtml: true
    },
    formatters:[
      {
        columns: [1, 2, 3],
        type: 'NumberFormat',
        options: {
          prefix: '$', 
          suffix:'m', 
          negativeColor: 'red', 
          negativeParens: true,  
        }
      },
      {
        columns: [3],
        type: 'ArrowFormat',
        options: {
          base: -0.00000000000000001,
          drawZeroLine :true
        },
      }
    ]
  };
 
  public table2Chart: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [],
    options: {
      width: '100%',
      height: '100%',
    },
    formatters:[
      {
        columns: [2,3,4,5],
        type: 'NumberFormat',
        options: {         
          fractionDigits:1
        }
      },
      {
        columns: [6],
        type: 'NumberFormat',
        options: {         
           suffix:'x',
           fractionDigits:1
        }
      },
      {
        columns: [7],
        type: 'NumberFormat',
        options: {         
          suffix:'%',
          fractionDigits:1
        }
      }
    ],
    
  };
  
 
}
