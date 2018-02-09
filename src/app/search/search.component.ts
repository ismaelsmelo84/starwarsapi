import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filter: string = ''
  name: string = ''

  constructor() { }

  ngOnInit() {
  }

  /* active to press key */
  public onName(event: any) {

    this.filter = event.target.value
  }

  /* active to press the button for search*/
  public passFilter(event: any) {

    this.name = this.filter
  }
}
