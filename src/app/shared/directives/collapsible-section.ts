import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[csHeader]'
})
export class CsHeaderDirective {
  constructor(public el: ElementRef) {}
}

@Directive({
  selector: '[csContent]'
})
export class CsContentDirective {
  constructor(public el: ElementRef) {}
}
