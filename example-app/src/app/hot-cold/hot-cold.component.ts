import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { filter, map, zip, share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})
export class HotColdComponent implements OnInit {

  base: Observable<number[]>;
  cold: Observable<any>;
  hot: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.base = this.http.get<number[]>('/assets/numbers.json');
  }

  setCold() {
    const even = this.base.pipe(map(l => l.filter(n => n % 2 === 0)));
    const unEven = this.base.pipe(map(l => l.filter(n => n % 2 === 1)));
    this.cold = even.pipe(
      zip(unEven),
      map(([e, u]) => ({even: e, unEven: u}))
    );
  }

  setHot() {
    const shared = this.base.pipe(share());
    const even = shared.pipe(map(l => l.filter(n => n % 2 === 0)));
    const unEven = shared.pipe(map(l => l.filter(n => n % 2 === 1)));
    this.hot = even.pipe(
      zip(unEven),
      map(([e, u]) => ({even: e, unEven: u}))
    );
  }

}

// cold
function getNowCold(): Observable<Date> {
  return new Observable(
    observer => observer.next(new Date())
  );
}

// hot
function getNowHot(): Observable<Date> {
  const current = new Date();
  return new Observable(
    observer => observer.next(current)
  );
}
