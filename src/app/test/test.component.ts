import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
   `,
   styles: []
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  constructor() { }

  ngOnInit() {
  }

}
