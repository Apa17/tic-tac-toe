import { Component, OnInit } from '@angular/core';
import { tileState, tile } from 'src/utils';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  tilesarray: tile[][] = [];
  current:number = 0;
  isOturn: boolean = false;
  win: boolean = false;
  isOWinner: boolean = false;
  draw: boolean = false;
  currentArrayBecauseNgForSucks : number[] = [];

  constructor() { }

  checkDraw(){
    let someoneisEmpty = false;
    for(let tile of this.tilesarray[this.current]){
      if(!someoneisEmpty){
        someoneisEmpty = tile.status === tileState.empty;
      }
    }
    this.draw = !someoneisEmpty;
  }

  checkRow(row: number) : boolean{
    let aux = 0;
    switch(row){
      case 0:
        aux = 0;
        break;
      case 1:
        aux = 3;
        break;
      case 2:
        aux = 6;
        break;
    }
    return (this.tilesarray[this.current][aux].status === this.tilesarray[this.current][aux + 1].status) && (this.tilesarray[this.current][aux].status === this.tilesarray[this.current][aux + 2].status);
  }

  checkColumn(column: number) : boolean{
    let aux = 0;
    switch(column){
      case 0:
        aux = 0;
        break;
      case 1:
        aux = 1;
        break;
      case 2:
        aux = 2;
        break;
    }
    return (this.tilesarray[this.current][aux].status === this.tilesarray[this.current][aux + 3].status) && (this.tilesarray[this.current][aux].status === this.tilesarray[this.current][aux + 6].status);
  }

  checkDiagonal(diagonal: number) : boolean{
    let aux = 0;
    switch(diagonal){
      case 0:
        return (this.tilesarray[this.current][0].status === this.tilesarray[this.current][4].status) && (this.tilesarray[this.current][0].status === this.tilesarray[this.current][8].status);
      case 1:
        return (this.tilesarray[this.current][2].status === this.tilesarray[this.current][4].status) && (this.tilesarray[this.current][2].status === this.tilesarray[this.current][6].status);
    }
    return false;
  }

  checkWin(id:number){
    switch(id){
      case 0:
        if(this.checkRow(0) || this.checkColumn(0) || this.checkDiagonal(0)){
          this.win = true;
        }
        break;
      case 1:
        if(this.checkRow(0) || this.checkColumn(1)){
          this.win = true;
        }
        break;
      case 2:
        if(this.checkRow(0) || this.checkColumn(2) || this.checkDiagonal(1)){
          this.win = true;
        }
        break;
      case 3:
        if(this.checkRow(1) || this.checkColumn(0)){
          this.win = true;
        }
        break;
      case 4:
        if(this.checkRow(1) || this.checkColumn(1) || this.checkDiagonal(0) || this.checkDiagonal(1)){
          this.win = true;
        }
        break;
      case 5:
        if(this.checkRow(1) || this.checkColumn(2)){
          this.win = true;
        }
        break;
      case 6:
        if(this.checkRow(2) || this.checkColumn(0) || this.checkDiagonal(1)){
          this.win = true;
        }
        break;
      case 7:
        if(this.checkRow(2) || this.checkColumn(1)){
          this.win = true;
        }
        break;
      case 8:
        if(this.checkRow(2) || this.checkColumn(2) || this.checkDiagonal(0)){
          this.win = true;
        }
        break;
    }
    this.checkDraw();
  }

  changeStateTo(i : number){
    this.current = i-1;
    this.draw = false;
    this.win = false;
    this.isOturn = this.current ===0 ? true : this.current%2 === 0 ? true : false;
    this.tilesarray = this.tilesarray.slice(0,i);
    this.currentArrayBecauseNgForSucks = this.currentArrayBecauseNgForSucks.slice(0,i-1)
  }

  checkState(id: number){
    if(!(this.tilesarray[this.current][id].status !== tileState.empty) && !this.win){
      let tiles: tile[] = [];
      for(let i = 0; i <9; i++){
        tiles.push({id: i, status: this.tilesarray[this.current][i].status})
      }
      tiles[id].status = this.isOturn ? tileState.O : tileState.X;
      this.tilesarray.push(tiles);
      this.current++;
      // this.tilesarray.push(this.tilesarray[this.current].slice());
      // this.current++;
      // this.tilesarray[this.current][id].status = this.isOturn ? tileState.O : tileState.X;
      this.checkWin(id);
      if(this.win){
        this.isOWinner = this.isOturn;
      }
      this.isOturn = !this.isOturn;
      this.currentArrayBecauseNgForSucks.push(this.current);
    }

  }

  ngOnInit(): void {
    let tiles: tile[] = [];
    for (let i = 0; i < 9; i++) {
      tiles.push({id: i, status: tileState.empty} as tile);
    }
    this.tilesarray[0] = tiles;
  }

}
