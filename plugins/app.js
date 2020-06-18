var rows = document.querySelectorAll('tr');
var cells = document.querySelectorAll('td');
console.log(cells);
var matrix = [];
var firstCell = Array.prototype.slice.call(cells, 0, 3);
console.log(firstCell);
matrix.push(
  Array.prototype.slice.call(cells, 0, 3),
  Array.prototype.slice.call(cells, 3, 6),
  Array.prototype.slice.call(cells, 6, 9)
);
console.log(matrix);
console.log(matrix[0][0].innerText);
counter = 0;
var cnt = 0;
cells.forEach((c) => {
  c.addEventListener('click', function () {
    if (this.innerHTML === '') {
      counter++;
      this.innerHTML = addXorO(counter);
    }
    for (var i = 0; i <= 2; i++) {
      if (
        cells[0].innerText === 'X' &&
        cells[1].innerText === 'X' &&
        cells[2].innerText === 'X'
      ) {
        console.log('thank you');
      }
    }

    // if (cnt === 3) {
    //
    // }
  });
});

function addXorO(counter) {
  if (counter % 2 === 0) {
    return 'O';
  }
  return 'X';
}
