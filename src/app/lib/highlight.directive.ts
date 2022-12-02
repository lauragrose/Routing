import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() {
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'violet'
}
