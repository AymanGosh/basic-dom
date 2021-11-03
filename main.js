// const down = document.getElementById("down");
// console.log(down);

// console.log(down.innerHTML);

const moveRight = function () {
  const block = document.getElementById("block");
  let left = parseInt(block.style.left) || 0;
  left += 15;
  block.style.left = left + "px";
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: Ayman xD";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);
