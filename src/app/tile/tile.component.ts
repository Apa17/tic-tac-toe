import { Component, Input, OnInit } from '@angular/core';
import { tileState } from 'src/utils';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() id: number = 0;
  @Input() status: string = '';
  cssclassofbox: string = 'box';

  constructor() {

  }

  ngOnInit(): void {
    switch(this.id){
      case 0:
        this.cssclassofbox = this.cssclassofbox.concat(" top left")
        break;
      case 1:
        this.cssclassofbox = this.cssclassofbox.concat(" top")
        break;
      case 2:
        this.cssclassofbox = this.cssclassofbox.concat(" top right")
        break;
      case 3:
        this.cssclassofbox = this.cssclassofbox.concat(" left")
        break;
      case 5:
        this.cssclassofbox = this.cssclassofbox.concat(" right")
        break;
      case 6:
        this.cssclassofbox = this.cssclassofbox.concat(" bottom left")
        break;
      case 7:
        this.cssclassofbox = this.cssclassofbox.concat(" bottom")
        break;
      case 8:
        this.cssclassofbox = this.cssclassofbox.concat(" bottom right")
        break;
    }
    console.log(this.cssclassofbox);
  }

}
