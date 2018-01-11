import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/Observable/interval';

import { pipe } from 'rxjs/util/pipe';
import {map, filter, reduce} from 'rxjs/operators';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  simpleObserver: Observable<string> = of('hello world');
  value: string;
  obs: Observable<string>;

  constructor() {
   }

  ngOnInit() {
    this.simpleObserver.subscribe(
      s => console.log(s),
      e => console.error(e),
      () => console.log('I\'m finished')
    );

    this.simpleObserver.subscribe(
      s => this.value = s
    );



    this.obs = this.simpleObserver;
  }

}
