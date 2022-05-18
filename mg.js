
var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Adding Strings 

  ctx.font = "50px Arial";
  ctx.fillStyle = "Purpule";
  ctx.fillText("Keep going!!", 150, 100);
  ctx.fillText("Crazy!!", 300, y);


//  Passing a variable with text
  let seriousQuestion = "Dont stop and keep fighting?";
  ctx.fillText(seriousQuestion, x, 200);







  Triangle();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);




Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 5);
