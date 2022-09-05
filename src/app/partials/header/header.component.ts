import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  _hamburgerOpen: boolean;

  constructor() {

    this._hamburgerOpen = false;

  }

  ngOnInit(): void {

  }

  isHamburgerOpen() : void{
    this._hamburgerOpen = !this._hamburgerOpen;
  }

}
