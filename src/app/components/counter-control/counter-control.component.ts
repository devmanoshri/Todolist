import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../../store/counter.actions';

@Component({
  selector: 'app-counter-control',
  imports: [],
  templateUrl: './counter-control.component.html',
  styleUrl: './counter-control.component.scss',
})
export class CounterControlComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ value: 5 }));
  }
  decrement() {
    this.store.dispatch(decrement({ value: 3 }));
  }
}
