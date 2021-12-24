import {AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import table1data from './inv-table1.json';
import table2data from './inv-table2.json';
import stackdata from './inv-stack.json';

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.css']
})
export class InvestorSummaryComponent implements OnInit {
  constructor() { 
    
  } 
  
  ngOnInit(): void {
    this.ConvertDataTable(stackdata,this.stackChart);
    this.ConvertDataTable(table1data,this.table1Chart);
    this.ConvertDataTable(table2data,this.table2Chart,true);
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
  
  ConvertDataTable(jsonobj:object, chart:GoogleChartInterface,addtotal:boolean = false ){
    var fundtable: any[] = [];
    var haveheader = false;
    var sumrow: any[] = [];
    Object.values(jsonobj).forEach(function (obj) {
        // row
        var hrow: any[] = [];
        if(haveheader == false){
          Object.keys(obj).forEach(function (col){
            // push header column data
            hrow.push(col);
            sumrow.push(null);
            haveheader = true;
          });
          fundtable.push(hrow);
        }
        var row: any[] = [];
        var i =0;
        Object.values(obj).forEach(function (col){
          // push column data
          row.push(col);
          if(col != null){
            var num = Number(col);
            if(!isNaN(+num)){           
              if(sumrow[i] == null)
                sumrow[i] = {v: 0,p: {className: 'TotalCell'}};
              
              sumrow[i]["v"] +=col;
            }
            else{
              sumrow[i] = {v: "",p: {className: 'TotalCell'}};
            }
          }
          else
            sumrow[i] = {v: "",p: {className: 'TotalCell'}};
          i++;
        });
        // push row data
        fundtable.push(row);
    });
    if(addtotal == true){
      sumrow[0] = {v: 'Total',p: {className: 'TotalCell'}};
      fundtable.push(sumrow);
    }
    chart.dataTable = fundtable;
  }
 
}
