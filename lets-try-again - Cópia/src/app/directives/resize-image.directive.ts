import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResizeImage]'
})
export class ResizeImageDirective implements OnInit {
  @Input('appResizeImage') height!: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log(this.height);
    this.el.nativeElement.style.height = `${this.height * 20}px`;
  }
}
