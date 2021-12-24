import {AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { FuncsService } from '../services/funcs.services';
import tabledata from './fund-table.json';
import fundlinedata from './fund-line.json';
import funddonutdata from './fund-donut.json';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {

  private data: any;

  constructor(private funcs: FuncsService) { 
    
  }
 
  
  ngOnInit(): void {
    this.funcs.ConvertDataTable(funddonutdata,this.donutChart);
    this.funcs.ConvertDataTable(fundlinedata,this.lineChart);
    this.funcs.ConvertDataTable(tabledata,this.tableChart,true);
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
}
