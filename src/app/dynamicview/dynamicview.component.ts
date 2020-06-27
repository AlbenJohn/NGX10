import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamicview',
  templateUrl: './dynamicview.component.html',
  styleUrls: ['./dynamicview.component.scss']
})
export class DynamicviewComponent implements OnInit {

  @Input() message:any;
  constructor() { }

  ngOnInit(): void {
  }

}
