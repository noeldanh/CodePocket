import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from './../../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class LandingComponent implements OnInit {
  @Input() myPost;
  // console.log(myPost);
  constructor() { }

  ngOnInit() {
  }

}
