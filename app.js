//set up an onclick for the table Cell

let table = document.getElementById("table");
let cells = table.getElementsByTagName("td");
for (let i = 0; i < cells.length; i ++) {
  cells[i].onclick = () => {
    cells[i].innerHTML = 'X';
  }
};

