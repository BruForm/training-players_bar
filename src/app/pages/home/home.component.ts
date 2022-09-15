import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _displayBar: boolean;

  constructor() { 
    this._displayBar = false;
  }

  ngOnInit(): void {

  }

  /**
   * displayBar
   */
  public displayBar(): void {
    this._displayBar = !this._displayBar;
  }

}
