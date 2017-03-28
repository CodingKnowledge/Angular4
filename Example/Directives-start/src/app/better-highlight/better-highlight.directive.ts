import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit() {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouserenter') mouseover(eventdata: Event) {
    this.rederer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
  }

  @HostListener('mouserleave') mouseleave(eventdata: Event) {
    this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
