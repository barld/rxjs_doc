import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  source: Observable<any>;
  subscription: Subscription;
  onDestroy = new Subject<boolean>();

  constructor() {
    this.source = of(10);
  }

  ngOnInit() {
    this.subscription = this.source.subscribe(console.log);


    this.source.pipe(takeUntil(this.onDestroy)).subscribe(console.log);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
