import { Component, OnInit } from '@angular/core';
import { tile } from 'src/utils';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  tiles: tile[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.tiles.push(new tile(i));
    }
  }

}
