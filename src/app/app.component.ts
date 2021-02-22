import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent} from './parent.component';
import { ParseComponent} from './parse/parse.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  item :string='';
    @ViewChild('parent') parent : ParentComponent;


    ngAfterViewInit(){
     // console.log(this.parent.whoAmI());// I am a Parent Component!
     this.item=this.parent.whoAmI();
     
    }
  
  
}
// @ViewChild('someInput') someInput: ElementRef;
  // ngAfterViewInit(){
  //   this.someInput.nativeElement.value= 'Whale!';