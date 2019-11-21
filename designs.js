// Select color input
function setColor() {
  return document.getElementById('colorPicker').value;
}


// Select size input
var gridSize = document.getElementById('sizePicker');
gridSize.addEventListener('submit', function(event) {
  event.preventDefault(); // Form not sent. Prevents screen refresh.
  makeGrid(); // Calls makeGrid() Function
})


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Variables for Function
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  const canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML = ""; // Resets grid when new submitted again.
  // Function below Creates Rows & Columns
  for (let y = 0; y < gridHeight; ++y) {
    var row = document.createElement('tr');
    canvas.appendChild(row);
    for (let x = 0; x <= gridWidth; ++x) {
      var col = document.createElement('td');
      row.appendChild(col);
      // eventListener assigns color to background when cell clicked.
      col.addEventListener('click', function(c) {
        var color = setColor();
        c.target.style.backgroundColor = color;
      });
    }
  }
}
