/* Native modules or others */
import { Injectable } from '@angular/core'
import { Component, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { Person } from '../_model/person.model'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ HttpClient ]
})

export class ResultsComponent implements OnChanges {

 @Input() name: string

  results: Person[]

  constructor( private httpClient: HttpClient ) {}

  /* to do only in changes of the context */
  public ngOnChanges() {
    this.getPeople(this.name)
  }

  /* search by API */
  public getPeople(name: string): Person[] {

    this.results = null

    this.httpClient.get(`https://swapi.co/api/people/?search=${name}`)
    .subscribe(
      (data: any[]) => {
          try {
            this.results = data['results']
          } catch(e) {
            console.log('Não foram encontrados resultados', e)
          }
      }
    )
    return this.results
  }
}
