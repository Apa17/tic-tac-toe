export enum tileState {
  "x",
  "o",
  "empty"
}

export class tile{
  status: tileState = tileState.empty;
  id: number;
  constructor(id: number) {
    this.id = id;
  }

  getId(): number{
    return this.id;
  }
}
