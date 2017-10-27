
import { Subject, Observable } from 'rxjs/RX';
import 'rxjs/RX';

declare const getData: (<t>() => Observable<t>);


Observable.zip(getData<{}>(), getData<any[]>())
    .subscribe(
        ([a, b]) => console.log(a, b)
    );