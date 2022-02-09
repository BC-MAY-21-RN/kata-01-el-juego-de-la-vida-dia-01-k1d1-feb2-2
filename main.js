
class Board {

    constructor(rows, columns) {

        this.rows = rows;
        this.columns = columns;

        this.createBoard();

    }

    createBoard() {
        // let boardX = new Array(this.columns);
    

        // for (let i = 0; i < boardX.length; i++) {
           
        //    boardX[i] = new Array(this.rows);
        // }

        // console.log(boardX.fill('*'));
        var obj = new Array (this.rows);
        for(let y=0;y<this.rows; y++){
          obj[y]=new Array(this.columns);
          
          
       
             
          //for (let z= 1; z <= obj[y].length; z++) {
            // obj[y][z].fill
            // console.log(obj[y][z].fill('*'));
     }
     console.log(obj.);

        }
       


       
    }

   


let board = new Board(4, 8)

//status: 1 for alive and 0 for dead
class Cell {
    constructor(x, y, status) {

        this.x = x;
        this.y = y;
        this.status = status;
        this.proxStatus = this.status;
        this.neighbor = [];
    }
    
    getNeighbor(){
      for(i =0;i<this.neighbor.length;i++){
        suma+=neighbor[i].status;
      }
    }

    setNeighbor(obj){
      this.neighbot.push(obj);
    }

    

    

}

addNeighbor=function(obj){
  let neighborX;
  let neighborY;

  for(i=-1;i<2;i++){
    for(j=-1;j<2;j++){
      neighborX= this.x+j;
      neighborY= this.y+i;

      if(i!=0 || j!=0){
        this.neighbor.push(this.status);
      }
    }
  }
}

let cell = new Cell(3,2,1);



