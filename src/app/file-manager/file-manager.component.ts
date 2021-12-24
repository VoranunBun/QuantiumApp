import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
  
})
export class FileManagerComponent implements OnInit {
  public data: any;

  constructor() { }
  ngOnInit(): void {
    this.data = sampleData;
  }

}
