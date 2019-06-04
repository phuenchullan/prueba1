import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  private data:Object = [];
  private indicador:Object;
  constructor(private cs:CurrencyService) { }

  ngOnInit() {
    this.cs.getCurrency().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
