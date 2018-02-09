import { TestBed, async } from '@angular/core/testing';
import { AppComponent  } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        ResultsComponent
      ],
    }).compileComponents();
  }));

});
