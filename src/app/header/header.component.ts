import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit{
  public collapsed = true;


  ngOnInit(){
  }

}




