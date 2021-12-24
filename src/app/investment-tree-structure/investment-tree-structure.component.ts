import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { FuncsService } from '../services/funcs.services';
import invdata from './inv.json';

@Component({
  selector: 'app-investment-tree-structure',
  templateUrl: './investment-tree-structure.component.html',
  styleUrls: ['./investment-tree-structure.component.css']
})
export class InvestmentTreeStructureComponent implements OnInit {

  constructor(private funcs: FuncsService) { }

  ngOnInit(): void {
    this.funcs.ConvertEntitieDataTable(invdata,this.orgChart);
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


 
}


