import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>
    <input type="text" value="Vishwas">
   `,
   styles: []
})
export class TestComponent implements OnInit {

  public name = "codevolution";
  constructor() { }

  ngOnInit() {
  }

}
