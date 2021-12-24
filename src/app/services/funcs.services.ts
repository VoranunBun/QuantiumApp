import { Injectable } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
@Injectable({
  providedIn: 'root'
})

export class FuncsService {
  constructor() { }
  
  ConvertDataTable(jsonobj:object, chart:GoogleChartInterface,addtotal:boolean = false ){
    var table: any[] = [];
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
          table.push(hrow);
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
        table.push(row);
    });
    if(addtotal == true){
      sumrow[0] = {v: 'Total',p: {className: 'TotalCell'}};
      table.push(sumrow);
    }
    chart.dataTable = table;
  }
  ConvertEntitieDataTable(jsonobj:object, chart:GoogleChartInterface ){
    var table: any[] = []; 
    var hrow: any[] = [];
    hrow.push("Name");
    hrow.push("Parent");
    table.push(hrow);
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
          table.push(row);
        }
    });
    chart.dataTable = table;
  }
}