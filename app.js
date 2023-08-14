const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/* Creates a rectangle of width:100, height:200 
at position x:50, y:50 and fills it with black color by default*/

// ctx.fillRect(50, 50, 100, 200);

/*Creates a rectangle of width:100, height:100 at
 different positions without filling them with any color*/
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
// filling all the rectangle above with default color
ctx.fill();

// beginPath() separates the path of the whatever follows the function from the previous
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
// changing the fill style means the color to be filled will be changed
ctx.fillStyle = "blue";
ctx.fill();
