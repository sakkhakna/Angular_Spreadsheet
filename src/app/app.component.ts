import { Component } from '@angular/core';
import {CellStyleModel, getFormatFromType} from "@syncfusion/ej2-angular-spreadsheet";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { LocalData } from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSpreadsheet';
  public cloudDate:object = new DataManager({
    url:'https://services.syncfusion.com/angular/production/api/Orders',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  })
  public btnClick() {
    this.cloudDate = LocalData;
  }

  public cellStyle: CellStyleModel = {fontWeight: 'bold'}
  public boldCenter = { fontWeight: 'bold', textAlign: 'center'}
  public currencyFormat: string = getFormatFromType('Currency');
  public data: Object[] = [{
    "Student Name": "Sak Khakna",
    "Gender": "Male",
    "Birthday": "15/11/2003",
    "Major": "ITE",
    "Class": "M4",
    "Paid": "123.15",
  },
    {
      "Student Name": "Sok Sok",
      "Gender": "Female",
      "Birthday": "15/12/2012",
      "Major": "ITE",
      "Class": "M4",
      "Paid": "345.15",
    },
  ]
}
