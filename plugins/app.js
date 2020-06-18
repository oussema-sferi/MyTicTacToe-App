var table = document.getElementById('mytable');
var rows = document.querySelectorAll('tr');
var cells = document.querySelectorAll('td');

var matrix = [];
var firstCell = Array.prototype.slice.call(cells, 0, 3);

matrix.push(
  Array.prototype.slice.call(cells, 0, 3),
  Array.prototype.slice.call(cells, 3, 6),
  Array.prototype.slice.call(cells, 6, 9)
);

counter = 0;
var state = true;
function tacTicToe() {
  if (state === true) {
    if (this.innerHTML === '') {
      counter++;
      this.innerHTML = addXorO(counter);
    }
    console.log(counter);

    for (var i = 0; i <= 2; i++) {
      if (
        (matrix[i][0].innerText === 'X' &&
          matrix[i][1].innerText === 'X' &&
          matrix[i][2].innerText === 'X') ||
        (matrix[i][0].innerText === 'O' &&
          matrix[i][1].innerText === 'O' &&
          matrix[i][2].innerText === 'O') ||
        (matrix[0][i].innerText === 'X' &&
          matrix[1][i].innerText === 'X' &&
          matrix[2][i].innerText === 'X') ||
        (matrix[0][i].innerText === 'O' &&
          matrix[1][i].innerText === 'O' &&
          matrix[2][i].innerText === 'O') ||
        (matrix[0][0].innerText === 'X' &&
          matrix[1][1].innerText === 'X' &&
          matrix[2][2].innerText === 'X') ||
        (matrix[0][0].innerText === 'O' &&
          matrix[1][1].innerText === 'O' &&
          matrix[2][2].innerText === 'O') ||
        (matrix[0][2].innerText === 'X' &&
          matrix[1][1].innerText === 'X' &&
          matrix[2][0].innerText === 'X') ||
        (matrix[0][2].innerText === 'O' &&
          matrix[1][1].innerText === 'O' &&
          matrix[2][0].innerText === 'O')
      ) {
        // table.parentNode.removeChild(table);

        if (counter % 2 === 0) {
          state = false;
          return create('O Has Won');
        } else if (counter % 2 !== 0) {
          state = false;
          return create('X Has Won');
        }
      }
    }
    if (counter === 9) {
      console.log(counter);
      state = false;
      return create('Draw');
    }
  }
}
cells.forEach((c) => {
  c.addEventListener('click', tacTicToe);
});

function addXorO(counter) {
  if (counter % 2 === 0) {
    return 'O';
  }
  return 'X';
}

function create(text) {
  var parag = document.createElement('p');
  var node = document.createTextNode(text);
  parag.appendChild(node);
  var elem = document.getElementById('finalmsg');
  elem.appendChild(parag);
}
