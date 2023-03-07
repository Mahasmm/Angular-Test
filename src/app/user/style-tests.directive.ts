import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleTests]'
})
export class StyleTestsDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
   }

}
