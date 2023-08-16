const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const colorPicker = document.querySelector("#color");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event) {
  isPainting = true;
}

function onMouseUp(event) {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthUpdate(event) {
  ctx.lineWidth = event.target.value;
  //   console.log(event.target.value);
}

function onColorSelect(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
  //   console.log(event.target.value);
}

function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  //   console.log(event.target.dataset.color);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
lineWidth.addEventListener("change", onLineWidthUpdate);
colorPicker.addEventListener("change", onColorSelect);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
