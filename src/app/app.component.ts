import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import {Rectangle} from "./rectangle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   rec = new Rectangle(5,5,10,10);

  xy = this.rec.toString();
  area = this.rec.area();

}
