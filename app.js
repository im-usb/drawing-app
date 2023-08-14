const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//project-1 house
//My version
ctx.moveTo(100, 200);
ctx.lineTo(100, 400);
ctx.lineTo(300, 400);
ctx.lineTo(300, 200);
ctx.lineTo(100, 200);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 100);
ctx.lineTo(300, 200);
ctx.fillStyle = "brown";
ctx.fill();
ctx.beginPath();
ctx.moveTo(175, 400);
ctx.lineTo(175, 300);
ctx.lineTo(225, 300);
ctx.lineTo(225, 400);
ctx.fillStyle = "grey";
ctx.fill();

//changing path for another version
ctx.beginPath();
ctx.fillStyle = "black";

//Tutorial Version
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(600, 200, 50, 200);
ctx.fillRect(500, 300, 50, 100);
ctx.fillRect(400, 200, 200, 20);
ctx.moveTo(400, 200);
ctx.lineTo(525, 100);
ctx.lineTo(650, 200);
ctx.fill();
