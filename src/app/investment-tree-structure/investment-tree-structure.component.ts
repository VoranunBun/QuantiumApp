import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import invdata from './inv.json';

@Component({
  selector: 'app-investment-tree-structure',
  templateUrl: './investment-tree-structure.component.html',
  styleUrls: ['./investment-tree-structure.component.css']
})
export class InvestmentTreeStructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ConvertDataTable(invdata,this.orgChart);
  }
  public orgChart: GoogleChartInterface = {
    chartType: GoogleChartType.OrgChart,
    dataTable:  [
      ['Name',   'Parent'],
      [{v: '99', f: 'Jiye<div class="desc"><u>Parallel Fund</u><ul><li><i class="mdi mdi-arrow-right-drop-circle"></i>GPs</li></ul></div>'}, ''],
      [{v: '1', f: 'Sungu<div>SPV</div>'}, '99'],
      [{v: '2', f: 'Menggu<div>SPV</div>'}, '100'],    
    ],
    options: {
      'title': '', 
      allowHtml: true,
      allowCollapse: true,
    },
  };
  ConvertDataTable(jsonobj:object, chart:GoogleChartInterface ){
    
    var fundtable: any[] = []; 

    var hrow: any[] = [];
    hrow.push("Name");
    hrow.push("Parent");
    fundtable.push(hrow);
    Object.values(jsonobj).forEach(function (obj) {
        // row
        if(obj.ID != null && obj.Parent != null){
          
          var row: any[] = [];
          var html = '<div class="name">'+ obj.Name +'</div>';
          if(obj.Type != null && obj.Type != ''){
            html += '<div class="desc">';
            html += '<u>' + obj.Type + '</u>';
            html += '</div>';
          }
          if((obj.GPs != null && obj.GPs != '') || (obj.LPs != null && obj.LPs != '')){
            html += '<ul>';
            if(obj.GPs != null && obj.GPs != ''){
              html += '<li><i class="mdi mdi-arrow-right-drop-circle"></i>' + obj.GPs + ' GP</li>';
            }
            if(obj.LPs != null && obj.LPs != ''){
              html += '<li><i class="mdi mdi-arrow-right-drop-circle"></i>' + obj.LPs + ' LPs</li>';
            }
            html += '</ul>';
          }
          var name = {v:JSON.stringify(obj.ID), f: html};
          row.push(name);
          if(obj.Parent == 0)
            row.push('');
          else
            row.push(JSON.stringify(obj.Parent));
          // push row data
          fundtable.push(row);
        }
    });
    debugger;
    chart.dataTable = fundtable;
  }
 
}


