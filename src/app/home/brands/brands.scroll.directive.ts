import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  prevFunc() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    var experience = elm.getElementsByClassName('experience');
    elm.prepend(item[item.length - 1]);
  }
}

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  nextFunc() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    var experience = elm.getElementsByClassName('experience');
    elm.append(item[0]);
  }
}
