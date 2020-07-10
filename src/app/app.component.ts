import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';
  // result = '';
  // collection = [];
  // constructor() {
  //   for (let i = 1; i <= 100; i++) {
  //     const obj = {'Name:string' : `jagadeesh${i}`, 'Id:string' : `new${i}` };
  //     this.collection.push(obj);
  //   }
  // }
  public data = [
    {Title: 't1', Issue: 'I1' , CurrentState: 'C1', Date: 'D1' },
    {Title: 't2', Issue: 'I2' , CurrentState: 'C2', Date: 'D2' },
    {Title: 't3', Issue: 'I3' , CurrentState: 'C3', Date: 'D3' },
    {Title: 't4', Issue: 'I4' , CurrentState: 'C4', Date: 'D4' },
    {Title: 't5', Issue: 'I5' , CurrentState: 'C5', Date: 'D5' },
    {Title: 't6', Issue: 'I6' , CurrentState: 'C6', Date: 'D6' },
    {Title: 't7', Issue: 'I7' , CurrentState: 'C7', Date: 'D7' },
    {Title: 't8', Issue: 'I8' , CurrentState: 'C8', Date: 'D8' },
    {Title: 't9', Issue: 'I9' , CurrentState: 'C9', Date: 'D9' },
    {Title: 't10', Issue: 'I10' , CurrentState: 'C10', Date: 'D10' },
    {Title: 't11', Issue: 'I11' , CurrentState: 'C11', Date: 'D11' },
    {Title: 't12', Issue: 'I12' , CurrentState: 'C12', Date: 'D12' },
    {Title: 't13', Issue: 'I13' , CurrentState: 'C13', Date: 'D13' },
    {Title: 't14', Issue: 'I14' , CurrentState: 'C14', Date: 'D14' },
    {Title: 't15', Issue: 'I15' , CurrentState: 'C15', Date: 'D15' },
    {Title: 't16', Issue: 'I16' , CurrentState: 'C16', Date: 'D16' },
  ];
}
