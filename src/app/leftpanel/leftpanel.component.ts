import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.scss']
})
export class LeftpanelComponent implements OnInit {

  public LeftPanelOptions :any ={    
    name:'leftpanellayout'
  ,size:"100%"
  ,north:{
    paneSelector: "#leftpanel_north"
    ,size:"100"
    ,maxHeight:100
    ,initClosed: false
    , initHidden: false
  }
  ,south:{
    paneSelector: "#leftpanel_south"
    ,size:"100"
    ,maxHeight:100
    ,initClosed: false
    , initHidden: false
  }
  ,center:{
    paneSelector: "#leftpanel_center",
    size:"100%"
    ,  resizable:true
    , livePaneResizing: true
        , resizeWithWindow: true
  }
  ,west:{
    paneSelector: "#leftpanel_west"
    ,initClosed: true
   , initHidden: true
  }
  ,east:{
    paneSelector: "#leftpanel_east"
    ,initClosed: true
    , initHidden: true
  }}

  public menuitems:any = [{name:'1'},{name:'2'},{name:"3"},{name:'4'},{name:'5'}]
  constructor() { }

  ngOnInit() 
  {
    $(document).ready( () =>{
      $('#leftPaneldiv').layout(this.LeftPanelOptions);
      });
  }
  
    createcomponent(items)
    {
        console.log(items.name)
    }
}

