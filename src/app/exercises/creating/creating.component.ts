import { Component } from '@angular/core';
import { concatMap, interval, of, ReplaySubject, take, timer } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/
    /*of(1, 2, 3)
      .subscribe(value => this.log(value))*/

    /*from([1, 2, 3])
      .subscribe(value => this.log(value))*/

    timer(30, 10)
      .subscribe(value => this.log(value));

    timer(2000)
      .pipe(concatMap(() => of('Hello!')))
      .subscribe(value => this.log(value));

    interval(2000)
      .pipe(take(4))
      .subscribe(value => this.log(value));

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
