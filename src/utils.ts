export enum tileState {
  "O",
  "X",
  "empty"
}

// export class tile{
//   status: tileState = tileState.empty;
//   id: number;
//   constructor(id: number, state?: tileState) {
//     this.id = id;
//     if(state){
//       this.status = state;
//     }
//   }

//   getId(): number{
//     return this.id;
//   }
// }
export interface tile{
  id: number;
  status: tileState;
}
