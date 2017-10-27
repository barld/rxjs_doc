/**
 * after the component is destroyed every subscribtion in the component is unsubscribed
 * takeUntil is taking a observable and listning in paralel to the subscription and unsubricbe/stop taking items if the subscription is finalized or emiting
 */

import { Subject, Observable } from 'rxjs/RX';
import 'rxjs/RX';
import fetch from 'node-fetch'

export class BaseComponent {
  protected componentDestroyed: Subject<boolean> = new Subject();
 
  constructor(
    private service: { getData: () => Observable<any> }
  ){ }

  ngOnInit(): void {
    this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
    this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

}


//example

const service = {
  getData: () => Observable.interval(1000).switchMap(() => fetch('http://api.icndb.com/jokes/random?firstName=Barld&lastName=Boot'))
  .switchMap(res => res.json()).map(json => json.value.joke)
};
const bc = new BaseComponent(service);
bc.ngOnInit();

setTimeout(() => {
  console.log()
  bc.ngOnDestroy();
},10 * 1000)