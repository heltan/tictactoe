//setup an onclick for the button, to clear all local storage and start new game
document.getElementById('newgame').onclick = () => {
  console.log('clicked');
  localStorage.clear();
  //now we also want to clear the board
  let cells = table.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i ++) {
    cells[i].innerHTML = 'click here';
  }
  gamePlay();
};



//set up an onclick for the table Cell
let gamePlay = () => {
  let table = document.getElementById("table");
let cells = table.getElementsByTagName("td");
//first we check if anything is saved in local storage for who the current player is
let getCurrentPlayer = localStorage.getItem('CurrentPlayerX');
if (getCurrentPlayer === undefined) {
  //if no current player, then we set
  localStorage.setItem('CurrentPlayerX', 'true');
} else {
  //otherwise don't do anything
  localStorage.setItem('CurrentPlayerX', 'true');
}
let cellHTML;
//now we set onclick for every cell in the table
for (let i = 0; i < cells.length; i ++) {

  cells[i].onclick = () => {
    //we check who the current player is from local storage
    getCurrentPlayer = localStorage.getItem('CurrentPlayerX');

    //now we test if current player is X, and the cell they click on is available to click
    if (getCurrentPlayer === 'true' && cells[i].innerHTML === 'click here') {
      console.log('going in here');
      cells[i].innerHTML = 'X';
      localStorage.setItem('CurrentPlayerX', 'false');

    } else if (getCurrentPlayer === 'false' && cells[i].innerHTML === 'click here') {

      cells[i].innerHTML = 'O';
      localStorage.setItem('CurrentPlayerX', 'true');
    }

  }
}


};
gamePlay();


