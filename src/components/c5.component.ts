import { Component } from '@angular/core';

@Component({
  selector: 'c5-component',
  template: `
    <div class="addMargin">
      <div><strong>C5 Works!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>
  `
})
export default class C5Component {}