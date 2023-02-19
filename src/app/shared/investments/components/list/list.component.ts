import { Component, OnInit } from '@angular/core';

//Model
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public investments!:Array<Investments>; 

  constructor(private listInvestimentService: ListInvestmentsService){ }
  
  ngOnInit(): void {
    this.listInvestimentService.list().subscribe((res) => (this.investments = res));
  }
}
