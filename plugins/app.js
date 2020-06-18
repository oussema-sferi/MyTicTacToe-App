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
        alert('Congratulations');
      }
    }
  });
});

function addXorO(counter) {
  if (counter % 2 === 0) {
    return 'O';
  }
  return 'X';
}
