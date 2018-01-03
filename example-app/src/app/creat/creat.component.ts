import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  create2$: Observable<number>;
  create1$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

  create1() {
    return new Observable<string>(observer => {
      observer.next('hello world');
      observer.complete();
    });
  }

  create2() {
    return new Observable<number>(observer => {
      let i = 1;
      function f(n: number) {
        if (observer.closed) {
          return;
        } else if (n <= 0) {
          observer.complete();
        } else {
          setTimeout(() => {
            if (!observer.closed) {
              observer.next(i++);
              f(n - 1);
            }
          }, 200);
        }
      }

      f(100);

      return () => { /* tear down logic */ };
    });
  }

}
