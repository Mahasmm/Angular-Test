import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appStyleTest]'
})
export class StyleTestDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
   }

}
