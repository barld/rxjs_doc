/**
 * after the component is destroyd every subscribtion in the the component is unsubscribed
 * takeUntil is taking a observable and listning in paralel to the subscription and unsubricbe/stop taking items if the subscription is finalized or emiting
 */

import { Subject, Observable } from 'rxjs/RX';
import 'rxjs/RX';

export class BaseComponent {
  protected componentDestroyed: Subject<boolean> = new Subject();

  constructor(
    private service: {getData: () => Observable<any> }
  ){ }

  ngOnInit(): void {
    this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
    this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
    this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

}

