import {AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import fundtabledata from './fund-table.json';
import fundlinedata from './fund-line.json';
import funddonutdata from './fund-donut.json';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {

  private data: any;

  constructor() { 
    
  }
 
  
  ngOnInit(): void {
    this.ConvertDataTable(funddonutdata,this.donutChart);
    this.ConvertDataTable(fundlinedata,this.lineChart);
    this.ConvertDataTable(fundtabledata,this.tableChart,true);
  }
  public donutChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable:  [],
    options: {
      chartArea:{height:'300',
                  width:'100%'},
      pieHole: 0.4,
      pieSliceText:'value',      
    },
  };
  public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [],
    options: {
      legend: { position: 'bottom' },
    },
  };
 
  public tableChart: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [],
    options: {
      width: '100%',
      height: '100%',
      allowHtml: true,
      cssClassNames: {  
        headerCell: 'gheaderCell',       
        tableCell: 'gtableCell'
      }   
    },
    formatters:[
      {
        columns: [4,11],
        type: 'NumberFormat',
        options: {         
          suffix:'%'
        }
      },{
        columns: [5,6,7,8,9],
        type: 'NumberFormat',
        options: {         
          prefix:'$'
        }
      },{
        columns: [10],
        type: 'NumberFormat',
        options: {         
          suffix:'x'
        }
      }
    ]
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
