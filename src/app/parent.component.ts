import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  whoAmI() {
    return 'I am a Parent component!';
  }
  

  ngOnInit(): void {
  }

}
