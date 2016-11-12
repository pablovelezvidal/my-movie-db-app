import { Directive, Output, EventEmitter, ElementRef} from '@angular/core';

@Directive({
  selector: '[onCreate]'
})
export class OnCreate {
  //directive to set to an child component to trigger on create methods
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
 constructor(public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference 
  }
  ngOnInit() {      
    var el = this.element.nativeElement;
    this.onCreate.emit({element: el}); 
     
  } 

}