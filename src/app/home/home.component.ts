import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { CounterControlComponent } from "../components/counter-control/counter-control.component";
import { CounterOutputComponent } from "../components/counter-output/counter-output.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, CounterControlComponent, CounterOutputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = 'this is the message from home!';

  keyUpHandler(event:KeyboardEvent) {
    console.log(`you have typed ${event.key} key`);
  }

}
