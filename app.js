//set up an onclick for the table Cell

let table = document.getElementById("table");
let cells = table.getElementsByTagName("td");
let currentPlayerisX = true;
for (let i = 0; i < cells.length; i ++) {
  cells[i].onclick = () => {
    if (currentPlayerisX) {
      cells[i].innerHTML = '0';
      currentPlayerisX = false;
    } else if (!currentPlayerisX) {
      currentPlayerisX = true;
      cells[i].innerHTML = 'X';
    }

  }
};

