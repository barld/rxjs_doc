import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';
import { map, mergeMap, filter, delay, flatMap } from 'rxjs/operators';
import { zip } from 'rxjs/operators/zip';
import { scan } from 'rxjs/operators/scan';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  baseValue: Observable<number>;
  mappedValue: Observable<number>;

  constructor() { }

  ngOnInit() {
    // be careful!
    this.base()
      .pipe(
        mergeMap(n => this.mapped(n))
      );

    this.base()
    .pipe(
      filter(x => x % 13 === 0)
    );

    // zip
    const slowRequest = of('hallo').pipe(delay(1000));
    slowRequest.pipe(
      zip(slowRequest, slowRequest)
    );

    const source = this.base().pipe(
      map(x => x),
      map(x => x * 2),
      scan<number, [number, number]>( ([a, b], x) => ([x, a + b]), [0, 0] ),
      flatMap(x => x)
    );

  }

  base() {
    return interval(200);
  }
  mapped(n: number = 2) {
    return this.base().pipe(map(x => x * n));
  }

}
