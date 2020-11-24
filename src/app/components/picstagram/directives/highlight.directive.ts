// create cusotm Directive:
// ElementRef its gives refrence of element:
// use HostListner which is listen all the event of host:
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  // use Input() decorator:
  @Input("appHighlight") color: string;

  // inject ElementRef:
  constructor(private el: ElementRef) {}

  // create a method onMouseOver():
  // decorate this method with the HostListner decorator:
  @HostListener("mouseover") onMouseOver() {
    // gives styles too the elements:
    this.el.nativeElement.style.border = `2px solid ${this.color}`;
    this.el.nativeElement.style.boxShadow = `1px 1px 10px ${this.color}, 1px 1px 10px ${this.color}`;
  }
  // create a method onMouseOut():
  @HostListener("mouseout") onMouseOut() {
    this.el.nativeElement.style.border = "none";
    this.el.nativeElement.style.boxShadow = "none";
  }
}
