import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { validateConfig } from '@angular/router/src/config';
import { timeout } from 'q';

@Component({
  selector: 'app-create-operator',
  templateUrl: './create-operator.component.html',
  styleUrls: ['./create-operator.component.css']
})
export class CreateOperatorComponent implements OnInit {

  textStream: Subject<string> = new Subject<string>();
  _text = '';
  set text(value) {
    this._text = value;
    this.textStream.next(value);
  }
  throttledTextStream: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.throttledTextStream = this.textStream.pipe(this.throttle(1000));
  }

  throttle = (milisec: number) => <T>(obs: Observable<T>): Observable<T> => {
    return new Observable<T>(observer => {
      let i = 0;
      return obs.subscribe({
        next(item) {
            i++;
            const id = i;
            setTimeout(() => {
              if (id === i) {
                observer.next(item);
              }
            }, milisec);
        },
        error(err) {observer.error(err); },
        complete() {observer.complete(); }
      }
      );
    });
  }

}
