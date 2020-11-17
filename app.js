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




//this is the game play function that controls all the game
let gamePlay = () => {

  //let table = document.getElementById("table");
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
  //and we will push all the inputs into a gamearray, array.
  let gameArray =[1,1,1,1,1,1,1,1,1];
  for (let i = 0; i < cells.length; i ++) {
    //console.log(cells, 'cells');

    cells[i].onclick = () => {
      //we check who the current player is from local storage
      getCurrentPlayer = localStorage.getItem('CurrentPlayerX');
      //now check if there are empty spaces or not


      //now we test if current player is X, and the cell they click on is available to click
      if (getCurrentPlayer === 'true' && cells[i].innerHTML === 'click here') {

        cells[i].innerHTML = 'X';
        gameArray[i] = 'X';
        localStorage.setItem('CurrentPlayerX', 'false');

      } else if (getCurrentPlayer === 'false' && cells[i].innerHTML === 'click here') {

        cells[i].innerHTML = 'O';
        gameArray[i] = 'O';
        localStorage.setItem('CurrentPlayerX', 'true');
      }
      let emptyCheck = checkSpaces();
      console.log('gamearray',gameArray);
      console.log('is the board full?', emptyCheck);
      let splitArray = splitThree(gameArray);

      //now we run the checks to see if the game is over
      checkHorizontal();
      if (winner) {
        //then there is a winner

      }
      //console.log('horizontal winner?', winner);




    }
  }


};
gamePlay();

//this is a function that takes our game array and splits it into 3 arrays to be used by the below functions
let splitThree = (array) => {
  let mainArray = [];
  let arr1 = array.slice(0,3);
  let arr2 = array.slice(3,6);
  let arr3 = array.slice(6,8);
  mainArray.push(arr1, arr2, arr3);
  return mainArray;

};

//here are functions that check if there is a winner
//they will return the 'winner' variable if there is a winner. it will equal X or O

let winner;
let winnerArray;
let checkHorizontal = (array) => {
  //we will check each array inside, vertically. for every row

  for (let i = 0; i < array.length; i ++) {
      let currentArr = array[i];
      for (let a = 0; a < array.length; a ++) {
          if (currentArr[0] !== 1 && currentArr[0] === currentArr[1] && currentArr[0] === currentArr[2]) {
              winner = currentArr[0];

              return;
          }
      }
  }
};
//now below checks vertically for winner

let checkVertical = (array) => {
    let array1 = array[0];
    //only need to check through first row for vertically

    for (let i = 0; i < array[0].length; i++) {
        if (array1[i] !== 1) {
             let currentCheck = array1[i]; //this will be X, or O
             //now we check the other rows in the same index
             let arrToCheck = array[1];
             if (currentCheck === arrToCheck[i] && currentCheck === array[2][i]) {
                 winner = currentCheck;
                 console.log('vertical winner ', array1);
                 return;
             }
        }


    }

};
//now a function to check diagonally
let checkDiagonal = function (array) {
    //diagonally only needs to check index 0 and index last of the first row in this array
    let first = array[0][0];
    let last = array[0][array.length-1];
    let mid = array[1][1];
    let firstLastRow = array[2][0];
    let lastLastRow = array[2][array.length-1];
    if (first !== 1 && first === mid && first === lastLastRow) {
        winner = first;

        return;
    } if (last !== 1 && last === mid && last === firstLastRow) {
        winner = last;
        return;
    }

};
//now a function to determine if all spaces on the board have been used
let checkSpaces = () => {
  let cells = table.getElementsByTagName("td");

  for (let i = 0; i < cells.length; i ++) {
    if (cells[i].innerHTML === 'click here') {
      return false;
    }

  }
  return true;

};
