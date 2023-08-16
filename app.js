const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const colorPicker = document.querySelector("#color");
const modeBtn = document.querySelector("#fill-color");
const resetBtn = document.querySelector("#reset");

canvas.width = 800;
canvas.height = 600;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFill = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event) {
  if (isFill) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
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
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  colorPicker.value = colorValue;
  //   console.log(event.target.dataset.color);
}

function onModeBtnClick() {
  if (isFill) {
    isFill = false;
    modeBtn.value = "Draw";
  } else {
    modeBtn.value = "Fill";
    isFill = true;
  }
}

function onResetBtnClick() {
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
lineWidth.addEventListener("change", onLineWidthUpdate);
colorPicker.addEventListener("change", onColorSelect);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeBtnClick);
resetBtn.addEventListener("click", onResetBtnClick);
