const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(300, 200, 30, 100);
ctx.fillRect(450, 200, 30, 100);
ctx.fillRect(340, 200, 100, 200);

ctx.arc(390, 125, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(50 + 315, 110, 5, 0, 2 * Math.PI);
ctx.arc(100 + 315, 110, 5, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(390, 140, 25, 0, Math.PI);
ctx.fill();
